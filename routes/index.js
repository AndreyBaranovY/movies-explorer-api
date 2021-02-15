const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const { validateUser, validateLogin } = require('../middlewares/requestValidation');
const { login, createUser, logout } = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', validateLogin, login);
router.post('/signup', validateUser, createUser);
router.get('/signout', auth, logout);

router.use(auth, usersRouter);
router.use(auth, moviesRouter);

router.use((req, res, next) => {
  next(new NotFoundError({ message: 'Запрашиваемый ресурс не найден' }));
});
module.exports = router;
