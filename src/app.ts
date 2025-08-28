import express from 'express';
import config from 'config';

const app = express();

// JSON middleware
app.use(express.json());

// app port from config
const port = config.get<number>('port'); // pegando a porta do config



app.listen(port, async () => {
  console.log(`Aplicação está rodando na porta: ${port}`); // adicionando o app listen que serve para rodar a aplicação
}); // adicionando o port do config no listen para não deixar hardcoded a porta no app.ts