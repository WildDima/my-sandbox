let router = require('../../middlewares/router')
const db = require('../../db')

router.patch('/companies/:id', function *(next) {
  if(this.params.id in db.companies) {
    db.companies[this.params.id] = this.request.body
    let company = db.companies[this.params.id]

    this.response.body = company
    this.response.header = 200
  } else {
    this.response.status = 404
  }
  yield next
})
