const notFound = function* (next) {
  if (this.response.status === 404) {
    this.response.body = '<h1>404</h1>'
  }
  yield next
}

module.exports = notFound
