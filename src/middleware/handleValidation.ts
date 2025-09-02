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
