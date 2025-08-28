
export default {
  port: 3000,
  dbUser: process.env.DB_USER,// adicionando variaveis de ambiente no default.ts porque é um arquivo publico
  dbPass: process.env.DB_PASS,
  dbUri: `mongodb+srv://:@cluster0.6skx25o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
}

// criando config para a porta da aplicação para não deixar hardcoded no app.ts