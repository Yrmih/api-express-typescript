import express from 'express';
import config from 'config';
import router from './router';

const app = express();

// JSON middleware
app.use(express.json());

// routes
app.use('/api/', router);

// app port from config
const port = config.get<number>('port'); // pegando a porta do config


// o listen que serve para rodar a aplicação
app.listen(port, async () => {
  console.log(`Aplicação está rodando na porta: ${port}`);
}); // adicionando o port do config no listen para não deixar hardcoded a porta no app.ts