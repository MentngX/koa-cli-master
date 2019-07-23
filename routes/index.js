// const router = require('koa-router')()
// 新建路由实例
const Router = require('koa-router')
const router = new Router()
// 引入UserModel实例
const User = require('../models/UserModel')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/test', async ctx => {
  const users = await User.findAll()
  ctx.status = 200
  ctx.body = {
    users
  }
})

module.exports = router.routes()
