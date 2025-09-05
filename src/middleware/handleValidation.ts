import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: object[] = [];

  // Força a tipagem para ValidationError
  errors.array().map((err) => extractedErrors.push({ message: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

// o validate é um middleware que vai ser usado nas rotas para validar os dados que estão vindo no corpo da requisição
// ele usa o express-validator para fazer a validação
// se tiver algum erro ele retorna um array de erros com a mensagem de cada erro
// se não tiver erro ele chama o next() para continuar o fluxo da aplicação