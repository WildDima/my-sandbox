let router = require('../../middlewares/router')

router.post('/companies', function *(next) {
  this.response.status = 201
  this.response.body = { name: this.request.body.name }
  yield next
})
