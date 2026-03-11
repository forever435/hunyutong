// 婚育服务通后端服务器
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件配置
app.use(cors());
app.use(express.json());

// 请求日志
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

// 数据库连接
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'hunyutong_db',
    charset: 'utf8mb4'
});

// 连接数据库
db.connect((err) => {
    if (err) {
        console.error('❌ 数据库连接失败:', err.message);
        console.error('💡 请检查：');
        console.error('   1. MySQL服务是否启动？');
        console.error('   2. .env文件中的密码是否正确？');
        console.error('   3. 数据库hunyutong_db是否已创建？');
        process.exit(1);
    }
    console.log('✅ 数据库连接成功！');
});

// API路由

// 1. 测试接口
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: '后端API服务正常运行！',
        timestamp: new Date().toLocaleString()
    });
});

// 2. 获取所有省份列表
app.get('/api/provinces', (req, res) => {
    const sql = 'SELECT DISTINCT province FROM policies ORDER BY province';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.error('查询省份失败:', err);
            return res.status(500).json({
                success: false,
                message: '查询失败',
                error: err.message
            });
        }
        
        res.json({
            success: true,
            data: results.map(row => row.province)
        });
    });
});

// 3. 根据省份获取城市列表
app.get('/api/cities/:province', (req, res) => {
    const { province } = req.params;
    const sql = 'SELECT DISTINCT city FROM policies WHERE province = ? ORDER BY city';
    
    db.query(sql, [province], (err, results) => {
        if (err) {
            console.error('查询城市失败:', err);
            return res.status(500).json({
                success: false,
                message: '查询失败',
                error: err.message
            });
        }
        
        res.json({
            success: true,
            data: results.map(row => row.city)
        });
    });
});

// 4. 根据省份和城市获取区县列表
app.get('/api/districts/:province/:city', (req, res) => {
    const { province, city } = req.params;
    const sql = 'SELECT DISTINCT district FROM policies WHERE province = ? AND city = ? ORDER BY district';
    
    db.query(sql, [province, city], (err, results) => {
        if (err) {
            console.error('查询区县失败:', err);
            return res.status(500).json({
                success: false,
                message: '查询失败',
                error: err.message
            });
        }
        
        res.json({
            success: true,
            data: results.map(row => row.district)
        });
    });
});

// 5. 查询政策详情
app.get('/api/policy/:province/:city/:district', (req, res) => {
    const { province, city, district } = req.params;
    const sql = 'SELECT * FROM policies WHERE province = ? AND city = ? AND district = ?';
    
    db.query(sql, [province, city, district], (err, results) => {
        if (err) {
            console.error('查询政策失败:', err);
            return res.status(500).json({
                success: false,
                message: '查询失败',
                error: err.message
            });
        }
        
        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: '未找到该地区的政策数据'
            });
        }
        
        res.json({
            success: true,
            data: results[0]
        });
    });
});

// 6. 数据库统计信息
app.get('/api/stats', (req, res) => {
    const queries = [
        'SELECT COUNT(*) as count FROM policies',
        'SELECT COUNT(*) as count FROM users',
        'SELECT COUNT(*) as count FROM institutions'
    ];
    
    Promise.all(queries.map(sql => {
        return new Promise((resolve, reject) => {
            db.query(sql, (err, results) => {
                if (err) reject(err);
                else resolve(results[0].count);
            });
        });
    }))
    .then(([policies, users, institutions]) => {
        res.json({
            success: true,
            data: {
                policies,
                users,
                institutions,
                database: process.env.DB_NAME
            }
        });
    })
    .catch(err => {
        console.error('查询统计失败:', err);
        res.status(500).json({
            success: false,
            message: '查询失败',
            error: err.message
        });
    });
});

// 404处理
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: '接口不存在',
        path: req.url
    });
});

// 错误处理
app.use((err, req, res, next) => {
    console.error('服务器错误:', err);
    res.status(500).json({
        success: false,
        message: '服务器内部错误',
        error: err.message
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🚀 婚育服务通后端服务器启动成功！');
    console.log('='.repeat(50));
    console.log(`📡 服务地址: http://localhost:${PORT}`);
    console.log(`🗄️  数据库: ${process.env.DB_NAME}`);
    console.log('='.repeat(50));
    console.log('📚 可用的API接口：');
    console.log(`   GET  /api/test - 测试接口`);
    console.log(`   GET  /api/provinces - 获取省份列表`);
    console.log(`   GET  /api/cities/:province - 获取城市列表`);
    console.log(`   GET  /api/districts/:province/:city - 获取区县列表`);
    console.log(`   GET  /api/policy/:province/:city/:district - 查询政策`);
    console.log(`   GET  /api/stats - 数据统计`);
    console.log('='.repeat(50));
});

// 优雅关闭
process.on('SIGINT', () => {
    console.log('\n正在关闭服务器...');
    db.end((err) => {
        if (err) {
            console.error('关闭数据库连接失败:', err);
        } else {
            console.log('✅ 数据库连接已关闭');
        }
        process.exit(0);
    });
});
