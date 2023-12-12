import { ValidationError } from "express-validator";
import { ErrorType } from "../types";
import { CustomError } from "./customer-error.exception";

export class RequestValidationException extends CustomError {
  constructor(private errors: ValidationError[], public statusCode = 400) {
    super();

    Object.setPrototypeOf(this, RequestValidationException.prototype);
  }

  serializeErrors(): ErrorType[] {
    const formattedErrors = this.errors.map((error: ValidationError) => {
      if (error.type === "field") {
        return { message: error.msg, field: error.path };
      }

      return { message: error.msg };
    });

    return formattedErrors;
  }
}
