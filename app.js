const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody = require('koa-body')
const logger = require('koa-logger')

// 模板引擎需要放在所有的方法前面
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// middlewares
app.use(koaBody({
  multipart: true,
  formLimit: 2*1024*1024,
  formidable:{
    maxFieldsSize: 20*1024*1024
  }
}))
app.use(json())
app.use(logger())


// 引入koa-router组建并且生成router实例
const Router = require('koa-router')
const router = new Router()
// 引入index路由
const index = require('./routes/index')
router.use(index)
// 引入user路由
const user = require('./routes/user')
router.use('/api/user', user)
// 引入shift路由
const shift = require('./routes/shift')
router.use('/api/shift', shift)
// 引入doctor路由
const doctor = require('./routes/doctor')
router.use('/api/doctor', doctor)
// 引入patient路由
const patient = require('./routes/patient')
router.use('/api/patient', patient)
// 引入reg路由
const reg = require('./routes/reg')
router.use('/api/reg', reg)
// 引入pay路由
const pay = require('./routes/pay')
router.use('/api/pay', pay)
// 引入storage路由
const storage = require('./routes/storage')
router.use('/api/storage', storage)
const drug = require('./routes/drug')
router.use('/api/drug', drug)
// 引入prescription路由
const pre=require('./routes/pre')
router.use('/api/pre', pre)

// 将router实例挂载在app实例上
app.use(router.routes()).use(router.allowedMethods())



// error handler
onerror(app)






// 开启静态资源访问
// 通过localhost:3000/file/file1.jpg就可以访问@/public/file/file1.jpg文件
app.use(require('koa-static')(__dirname + '/public'))



// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})



// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
