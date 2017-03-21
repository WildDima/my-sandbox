const router = require('koa-router')()

router.get('/', function* (next) {
  this.response.status = 200
  this.response.body = 'Home'
  yield next
}).get('/products', function *(next) {
  this.response.status = 200
  this.response.body = 'catalog'
  yield next
}).get('/products/:id', function *(next) {
  this.response.status = 200
  this.response.body = `product ${this.params.id}`
  yield next
}).post('/products', function* (next) {
})

module.exports = router
