import { ErrorType } from "../types";

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message = "") {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): ErrorType[] | ErrorType;
}
