"use strict";
import express from "express";
import cors from "cors";
import morgan from "morgan";

// const { NotFoundError } = require("./expressError");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

export default app;