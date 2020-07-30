const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

import { getAllUsers, postUser } from '../controllers/users';
import User from '../models/user';

const router = new Router({
  prefix: '/api',
});

router
  .get('/users', (ctx, next) => {
    ctx.status = 200;
    ctx.body = getAllUsers();
  })
  .get('/users/:id', (ctx, next) => {
    //
  })
  .post('/users', (ctx, next) => {
    console.log(ctx);
    postUser();
    next();
  })
  .put('/users/:id', (ctx, next) => {
    //
  })
  .delete('/users/:id', (ctx, next) => {
    //
  });

export default router;
