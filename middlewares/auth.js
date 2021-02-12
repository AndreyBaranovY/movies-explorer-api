const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log('Token: >>  ');
  console.log(token);

  let payload;
  try {
    payload = jwt.verify(token, `${NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret'}`);
  } catch (err) {
    throw new UnauthorizedError({ message: 'Middleware reports: Необходима авторизация' });
  }
  req.user = payload;
  console.log('PayLoad: >>  ');
  console.log(payload);
  next();
};
