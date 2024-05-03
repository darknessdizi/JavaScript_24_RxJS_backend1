const combineRouters = require('koa-combine-routers'); // объединение роутеров

const unread = require('./messages/unread'); // получаем один из роутеров

const router = combineRouters(
  unread, // перечисляем все доступные роутеры
);

module.exports = router;
