import { body } from "express-validator";

export const createPostValidator = [
  body("title").trim().notEmpty().withMessage("required_error")
];
