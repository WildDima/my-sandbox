const logger = function* (next) {
  const start = new Date();
  yield next
  const duration = new Date() - start
  request = this.request
  console.log('=======')
  console.log(`${this.request.method} ${this.request.url} - ${duration} ms`)
  console.log('=======')
}


module.exports = logger
