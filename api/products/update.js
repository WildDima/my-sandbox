let router = require('../../middlewares/router')
const db = require('../../db')

router.patch('/products/:id', function *(next) {
  this.response.status = 200
  this.response.body = db.companies[this.params.id] || { error: 404 }
  yield next
})
