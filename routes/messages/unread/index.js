const Router = require('koa-router');
const dataBase = require('../../../db');

const router = new Router(); // создали роутер

router.get('/messages/unread', async (ctx) => {
  console.log('GET запрос от', ctx.request.header.referer); // показать url источника запроса
  const response = {
    status: 'ok',
    timestamp: Date.now(),
    messages: dataBase.getNewMessages(),
  };
  ctx.response.body = JSON.stringify(response);
  ctx.response.status = 200;
});

module.exports = router;
