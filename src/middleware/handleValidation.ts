import { Request, Response, NextFunction } from 'express';
import { validationResult, Result, ValidationError } from 'express-validator';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  // Pega os erros da requisição
  const errors: Result<ValidationError> = validationResult(req);

  // Se não houver erros, segue para o próximo middleware
  if (errors.isEmpty()) {
    return next();
  }

  // Mapeia os erros para um formato mais amigável
  const extractedErrors = errors.array().map(err => ({
    [err.param]: err.msg
  }));

  // Retorna os erros
  return res.status(422).json({
    errors: extractedErrors
  });
};
