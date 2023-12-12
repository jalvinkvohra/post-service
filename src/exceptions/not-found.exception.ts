import { ErrorType } from "../types";
import { CustomError } from "./customer-error.exception";

export class NotFoundException extends CustomError {
  statusCode: number = 404;
  serializeErrors(): ErrorType | ErrorType[] {
    return { message: "resource_not_found" };
  }
}
