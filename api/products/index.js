let router = require('../../middlewares/router')
const db = require('../../db')

router.get('/products', function *(next) {
  this.response.status = 200
  this.response.body = db.products
  yield next
})
