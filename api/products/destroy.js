let router = require('../../middlewares/router')
let db = require('../../db')

router.del('/products/:id', function *(next) {
  if(!!db.products[this.params.id]) {
    if(delete(db.products[this.params.id])) {
      this.response.status = 204
    } else {
      this.response.status = 500
    }
  } else {
    this.response.status = 404
  }

  yield next
})
