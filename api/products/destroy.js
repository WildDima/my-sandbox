let router = require('../../middlewares/router')
let db = require('../../db')

router.del('/products/:id', function *(next) {
  if(this.params.id in db.products) {
    delete(db.products[this.params.id])
    this.response.status = 204
  } else {
    this.response.status = 404
  }

  yield next
})
