let router = require('../../middlewares/router')
const db = require('../../db')

router.patch('/orders/:id', function *(next) {
  this.response.status = 200
  this.response.body = db.orders[this.params.id] || { error: 404 }
  yield next
})
