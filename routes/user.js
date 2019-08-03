/**
 * 用户
 */

const router = require('koa-router')()

// 引入UserModel实例
const User = require('../models/UserModel')


// router.prefix('/api/user')

/**注册接口
 * /api/user/register
 */
router.post('/register', async (ctx, next) =>{
  const {username, password, role} = ctx.request.body

  const createUsers = await User.create({
    username,
    password,
    role
  })
  if(createUsers){
    ctx.body = {
      createUsers
    }
    ctx.status = 200
  }
  
})

/**登录接口
 * /api/user/login
 */
router.post('/login', async (ctx, next) =>{

  const req = ctx.request.body;
  if(!req.username || !req.password){
    return ctx.body = {
      code : '-1',
      msg: '用户名或密码不能为空'
    }
  }else {
    const data = await User.findOne({
      where:{
        username: req.username
      }
    })

    if (data){
      if (data.password === req.password){
      ctx.status = 200
      ctx.body = {
        success : true,
        msg: '登陆成功',
        role:data.role
      }
      }else{
        console.log('password wrong')
        ctx.body = {
          success: false,
          msg: 'password wrong'
        }
      }

    }
  }



})





router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router.routes()
