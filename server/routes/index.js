const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const router = new Router({
  prefix: '/api',
});

router
  .get('/users', (ctx, next) => {
    //
    ctx.status = 200;
    ctx.body = JSON.stringify({
      id: 1,
      user: 'luis',
      email: 'luis@example.com',
    });
  })
  .get('/users/:id', (ctx, next) => {
    //
  })
  .post('/users', (ctx, next) => {
    //
  })
  .put('/users/:id', (ctx, next) => {
    //
  })
  .delete('/users/:id', (ctx, next) => {
    //
  });

export default router;
