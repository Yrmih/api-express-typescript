// ENV variables
require('dotenv').config();


import express from 'express';
import config from 'config';
import router from './router';

const app = express();

// JSON middleware
app.use(express.json());

// logger
import Logger from '../config/logger';

// Middlewares

import morganMiddleware from './middleware/morganMiddleware';

//DB

import db from '../config/db';

// routes
app.use('/api/', router);

app.use(morganMiddleware);

// app port from config
const port = config.get<number>('port'); // pegando a porta do config


// o listen que serve para rodar a aplicação


app.listen(port, async () => {
  Logger.info(`Aplicação está rodando na porta: ${port}`);
});