let router = require('../../middlewares/router')
const db = require('../../db')

router.del('/companies/:id', function *(next) {
  if(this.params.id in db.companies) {
    delete(db.companies[this.params.id])
    this.response.status = 204
  } else {
    this.response.status = 404
  }
  yield next
})
