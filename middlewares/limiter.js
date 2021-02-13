const rateLimit = require('express-rate-limit');
const { LIMITER_MESSAGE } = require('../constants');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100, // с одного IP можно совершить максимум 100 запросов
  message: LIMITER_MESSAGE,
});

module.exports = limiter;
