const notFound = function* (next) {
  if (this.response.status === 404) {
    if(this.request.header['content-type'] == 'application/json'){
      this.response.body = { error: 404 }
    } else {
      this.response.body = '<h1>404</h1>'
    }
  }
  yield next
}

module.exports = notFound
