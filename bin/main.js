const mongoose = require('mongoose');
const http = require('http');
require('../model');
const app = require('../app');

const server = http.createServer(app)
// 连接数据库
mongoose.connect("mongodb://39.100.81.23:27017/books", function(err) {
  if (err) console.log('数据库连接失败')
  console.log('数据库连接成功！')
  // 连接服务器
  server.listen(3000, function (err) { 
    if (!err) {
      console.log('Node express服务器已打开！')
    }
   })
})

// 断开服务器
server.on('close', function () { 
  console.log('Node express服务器已断开')
  // 断开数据库
  mongoose.disconnect()
})
