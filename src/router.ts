import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";

//Validation middleware
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("API funcionando!");
  })
  .post("/movie", movieCreateValidation(), validate, createMovie);
