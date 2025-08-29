
const  dbUser = process.env.DB_USER;
const  dbPass = process.env.DB_PASS;


export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.6skx25o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  env:'development',
}

// criando config para a porta da aplicação para não deixar hardcoded no app.ts