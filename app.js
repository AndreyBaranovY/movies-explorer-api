require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const router = require('./routes/index');
const limiter = require('./middlewares/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const { PORT, DB_ADDRESS } = require('./config');

const options = {
  origin: [
    'http://localhost:3000',
    'https://api.movie-finder.students.nomoredomains.rocks',
    'https://movie-finder.students.nomoredomains.rocks',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use('*', cors((options)));

app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_ADDRESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);
app.use('/', router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
