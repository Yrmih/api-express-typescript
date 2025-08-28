import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB");
    console.log(`${error}`);
  }
}

export default connect;