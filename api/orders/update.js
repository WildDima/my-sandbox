let router = require('../../middlewares/router')
const db = require('../../db')

router.patch('/orders/:id', function *(next) {
  if(this.params.id in db.orders) {
    db.orders[this.params.id] = this.request.body
    let order = db.orders[this.params.id]

    this.response.body = order
    this.response.header = 200
  } else {
    this.response.status = 404
  }
  yield next
})
