const Koa = require('koa');
const server = new Koa();

import router from './routes';

server.use(router.routes());

module.exports = server;
