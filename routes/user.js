const router = require('koa-router')()

// 引入UserModel实例
const User = require('../models/UserModel')


// router.prefix('/api/user')

router.post('/register', async (ctx, next) =>{
  console.log(ctx.request.body)
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


router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router.routes()
