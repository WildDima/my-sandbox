let router = require('../../middlewares/router')
const db = require('../../db')

router.del('/companies/:id', function *(next) {
  if(!!db.companies[this.params.id]) {
    if(delete(db.companies[this.params.id])) {
      this.response.status = 204
    } else {
      this.response.status = 500
    }
  } else {
    this.response.status = 404
  }
  yield next
})
