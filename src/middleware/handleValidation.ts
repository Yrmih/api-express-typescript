import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationError } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  
  const extratedErrors: { [key: string]: string }[] = [];

  errors
    .array()
    .forEach((err) => extratedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extratedErrors,
  });
};
