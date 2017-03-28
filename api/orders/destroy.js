let router = require('../../middlewares/router')
const db = require('../../db')

router.del('/orders/:id', function *(next) {
  if(this.params.id in db.orders) {
    delete(db.orders[this.params.id])
    this.response.status = 204
  } else {
    this.response.status = 404
  }
  yield next
})
