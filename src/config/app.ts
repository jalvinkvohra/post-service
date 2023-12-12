import express from "express";
import bodyParser from "body-parser";
import router from "./routes";
import { errorHandler } from "./middleware";

const app = express();

// Add json parser
app.use(bodyParser.json());

// Add routers for post
app.use(router);

// It should be at the end always
app.use(errorHandler);

export { app, express };
