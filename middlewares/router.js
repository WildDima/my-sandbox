const router = require('koa-router')()
const koaBody = require('koa-body')()

router.use(koaBody)

module.exports = router
