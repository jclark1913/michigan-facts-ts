"use strict";
import express from "express";
import cors from "cors";
import morgan from "morgan";

// const { NotFoundError } = require("./expressError");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

import factRoutes from "./routes/facts";

app.use("/facts", factRoutes);

export default app;

// /** Handle 404 errors -- this matches everything */
// app.use(function (req, res, next) {
//   throw new NotFoundError();
// });

// /** Generic error handler; anything unhandled goes here. */
// app.use(function (err, req, res, next) {
//   if (process.env.NODE_ENV !== "test") console.error(err.stack);
//   const status = err.status || 500;
//   const message = err.message;

//   return res.status(status).json({
//     error: { message, status },
//   });
// });
