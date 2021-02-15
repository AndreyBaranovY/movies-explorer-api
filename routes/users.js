const usersRouter = require('express').Router();
const {
  validateId, validateUserUpdate,
} = require('../middlewares/requestValidation');
const {
  getMe,
  updateUser,
} = require('../controllers/users');

usersRouter.get('/users/me', validateId, getMe);
usersRouter.patch('/users/me', validateUserUpdate, updateUser);

module.exports = usersRouter;
