let router = require('../../middlewares/router')
let koaBody = require('koa-body')()
const db = require('../../db')

router.del('/orders/:id', koaBody, function *(next) {
  this.response.status = 200
  this.response.body = db.orders[this.params.id] || { error: 404 }
  yield next
})
