const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/admin', {
      target: 'http://admin.plus2.com',
      changeOrigin: true,
    })
  )
}
