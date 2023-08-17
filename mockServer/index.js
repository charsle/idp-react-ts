// index.js
const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server');
const mockJs = require('mockjs');
const Random = mockJs.Random;
const customMiddleware = require('./middleware');
const { glob } = require('glob');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const menuList =require('./mock/index'); 
const userList =require('./mock/userList'); 
const deptList =require('./mock/deptList'); 
// mock数据，常驻内存
let data = {}
/**
 * mock解析json文件
 * @param file
 * @returns {*}
 */
function parsingToMockJs(file) {
    const json = fs.readFileSync(file, 'utf-8');
    return mockJs.mock(JSON.parse(json));
}

/**
 * 合并json数据
 * @param path
 */
function mergeJsonData(path) {
    Object.assign(data, parsingToMockJs(path));
}


/**
 * 扫描mock目录，生成mock数据
 */
 glob(path.join(__dirname, `/mock/**/*.json`)).then(files=>{
    files.forEach(item => {
        mergeJsonData(item);
    });
    const router = jsonServer.router(data);

    server.use(jsonServer.bodyParser);
    server.use(middlewares);

    server.use(customMiddleware);

    server.get('/system/menu/list', (req, res,next) => {
        res.status(200).json(menuList)
        next()
    })
    server.get('/system/user/list', (req, res,next) => {
        res.status(200).json(userList)
        next()
    })
    server.get('/system/user/deptTree', (req, res,next) => {
        res.status(200).json(deptList)
        next()
    })
   
   
    
    // 数据统一封装
    // router.render = (req, res) => {
    //     res.jsonp({
    //         success: true,
    //         code: 200,
    //         msg: 'success',
    //         data: res.locals.data
    //     });
    // }
    server.use('/', router);
    server.listen(8080, () => {
        console.log('Mock server is running...... http://localhost:3000')
    });
})