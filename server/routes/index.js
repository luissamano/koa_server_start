const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

import { getAllUsers } from '../controllers/users';

const router = new Router({
  prefix: '/api',
});

router
  .get('/users', (ctx, next) => {
    ctx.status = 200;
    ctx.body = JSON.stringify(getAllUsers);
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
