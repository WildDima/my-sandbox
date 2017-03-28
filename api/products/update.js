let router = require('../../middlewares/router')
const db = require('../../db')

router.patch('/products/:id', function *(next) {
  if(this.params.id in db.products) {
    db.products[this.params.id] = this.request.body
    let product = db.products[this.params.id]

    this.response.body = product
    this.response.header = 200
  } else {
    this.response.status = 404
  }

  yield next
})
