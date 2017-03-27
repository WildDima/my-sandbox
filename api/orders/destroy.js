let router = require('../../middlewares/router')
const db = require('../../db')

router.del('/orders/:id', function *(next) {
  if(!!db.orders[this.params.id]) {
    if(delete(db.orders[this.params.id])) {
      this.response.status = 204
    } else {
      this.response.status = 500
    }
  } else {
    this.response.status = 404
  }
  yield next
})
