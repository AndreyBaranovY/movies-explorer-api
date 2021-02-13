const { celebrate, Joi, CelebrateError } = require('celebrate');
const validator = require('validator');

const urlValidation = (value) => {
  if (!validator.isURL(value)) {
    throw new CelebrateError('Некорректный URL');
  }
  return value;
};

const validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(2).max(30),
    director: Joi.string().required().min(2).max(30),
    duration: Joi.number().required().min(1).max(5),
    year: Joi.string().required().min(2).max(4),
    description: Joi.string().required().min(2).max(1000),
    image: Joi.string().custom(urlValidation).required(),
    trailer: Joi.string().custom(urlValidation).required(),
    nameRU: Joi.string().required().min(2).max(30),
    nameEN: Joi.string().required().min(2).max(30),
    movieId: Joi.string().alphanum().length(24).hex(),
    thumbnail: Joi.string().custom(urlValidation).required(),
  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24).hex(),
  }),
});

const validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().alphanum().length(24).hex(),
  }),
});

const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validateUserUpdate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports = {
  validateMovie,
  validateMovieId,
  validateUser,
  validateId,
  validateUserUpdate,
  validateLogin,
};
