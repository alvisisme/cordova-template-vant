const fs = require('fs')

// 必须保证www目录存在，否则cordova prepare无法执行
try {
  fs.accessSync('www', fs.constants.R_OK | fs.constants.W_OK)
} catch (err) {
  console.log('directory www not found, creating it...')
  fs.mkdirSync('www')
}
