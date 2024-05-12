const { faker } = require('@faker-js/faker'); // импортируем faker из библиотеки

const dataBase = {
  listMessages: [],
  listNewMessages: [],

  getNewMessages() {
    // Возвращает список новых сообщений
    this.newMessages();
    this.newMessages();
    this.newMessages();

    this.listMessages.push(...this.listNewMessages);
    const list = this.listNewMessages.slice();
    this.listNewMessages = [];
    return list;
  },

  newMessages() {
    // Создание нового сообщения
    const date = faker.date.past();
    const email = faker.internet.email();

    const index = email.indexOf('@');
    let subject = email.slice(0, index);
    subject = subject.replace(/[_.]/, ' ');

    const obj = {
      id: faker.string.uuid(),
      from: email,
      subject: `Hello from ${subject}`,
      body: 'Long message body here',
      received: date.getTime(),
    };
    this.listNewMessages.push(obj);
  },
};

module.exports = dataBase;
