const router = require('koa-router')()

// 引入UserModel实例
const Shift = require('../models/ShiftModel')

// router.prefix('/api/shift')

/**获得所有轮班信息
 * /api/shift/list
 */
router.get('/list', async ctx => {
    const shifts = await Shift.findAll()
    ctx.status = 200
    ctx.body = {
      shifts
    }
  })







router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
  })





  module.exports = router.routes()