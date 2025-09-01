import morgan, {StreamOptions} from "morgan";
import config from "config";
import Logger from "../../config/logger";

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
}