// middleware.js

const mockJs = require('mockjs');
const Random = mockJs.Random;

module.exports = (req, res, next) => {
  // 可以对请求进行特殊操作
  if (req.method == 'POST' && req.path == '/login') {
    if (req.body.username === 'admin' && req.body.password === 'admin123') {
      res.status(200).json({
        "msg": "操作成功",
        "code": 200,
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjZhNGY1ODVlLTcyNTMtNGM3My04YzdkLTQ1YzgyNmZiMWU3MCJ9.VsVAv_fyjF95ZYgd3Z3RM6It3C88Anp12mXKZ3FW2rCP4D4uxs1M_CwTLvSmb0sCN0FpjRS6ExztY3EuDQw5zQ"
    })
    next()
    } else {
      res.status(200).json({
        "msg": `登录用户：${req.body.username} 不存在`,
        "code": 500,
    })
    }
  } else {
    next()
  }
}

