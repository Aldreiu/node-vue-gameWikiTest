module.exports = {
    // 输出的文件夹
    outputDir:__dirname + '/../server/admin',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/admin/'
      : '/'
  }