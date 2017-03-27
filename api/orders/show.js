let router = require('../../middlewares/router')
const db = require('../../db')

router.get('/orders/:id', function *(next) {
  this.response.status = 302
  this.response.body = db.orders[this.params.id] || { error: 404 }
  yield next
})
