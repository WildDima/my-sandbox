let router = require('../../middlewares/router')
let koaBody = require('koa-body')();

router.post('/products', koaBody, function *(next) {
  this.response.status = 200
  this.response.body = { name: this.request.body.name }
  yield next
})
