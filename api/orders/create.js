let router = require('../../middlewares/router')
let koaBody = require('koa-body')();

router.post('/orders', koaBody, function *(next) {
  this.response.status = 200
  this.response.body = {
    "email": this.request.body.email,
    "product_ids" : [
      this.request.body.ids
    ],
    "info": this.request.body.info,
    "status": "pending"
  }
  yield next
})
