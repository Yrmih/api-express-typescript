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

app.use(morganMiddleware);

// routes
app.use('/api/', router);

// app port from config
const port = config.get<number>('port'); // pegando a porta do config


// o listen que serve para rodar a aplicação


db().then(() => {
  app.listen(port, () => {
    Logger.info(`Aplição rodando na porta ${port}`);
  });
}).catch((e) => {
  Logger.error(`Erro ao conectar com o banco de dados: ${e.message}`);
});

export default app;