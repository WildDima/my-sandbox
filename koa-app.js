const Koa = require('koa')
const mount = require('koa-mount')
const static = require('koa-static')
const Path = require('path')

const logger = require('./middlewares/logger')
const router = require('./middlewares/router')
const notFound = require('./middlewares/notFound')

require('./api/products/index')
require('./api/products/show')
require('./api/products/create')
require('./api/products/destroy')
require('./api/products/update')

require('./api/companies/index')
require('./api/companies/show')
require('./api/companies/create')
require('./api/companies/destroy')
require('./api/companies/update')

require('./api/orders/index')
require('./api/orders/show')
require('./api/orders/create')
require('./api/orders/destroy')
require('./api/orders/update')

const app = new Koa()

app.use(logger)

app.use(router.routes())

app.use(mount('/public', static(Path.resolve("public"))))

app.use(notFound)

app.listen(3000);

module.exports = app
