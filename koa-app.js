const Koa = require('koa')
const mount = require('koa-mount')
const static = require('koa-static')
const Path = require('path')

const logger = require('./middleware/logger')
const router = require('./middleware/router')
const notFound = require('./middleware/notFound')

const app = new Koa()

app.use(logger)

app.use(router.routes())

app.use(mount('/public', static(Path.resolve("public"))))

app.use(notFound)

app.listen(3000);

module.exports = app
