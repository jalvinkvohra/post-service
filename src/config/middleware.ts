import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationException } from "../exceptions/request-validation.exception";
import { NotFoundException } from "../exceptions/not-found.exception";
import { CustomError } from "../exceptions/customer-error.exception";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationException(errors.array());
  }

  next();
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  return res.status(500).send({ error: "Something went wrong" });
};
