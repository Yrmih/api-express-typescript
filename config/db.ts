import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectado ao MongoDB");
  } catch (error) {
    Logger.info("Erro ao conectar ao MongoDB");
    Logger.info(`${error}`);
  }
}

export default connect;