import express from 'express';
import config from 'config';

const app = express();

// JSON middleware
app.use(express.json());

// app port from config
const port = config.get<number>('port'); // pegando a porta do config



app.listen(3000, async () => {
  console.log('Aplicação está rodando na porta 3000'); // adicionando o app listen que serve para rodar a aplicação
});