"use strict";

import * as dotenv from "dotenv";
import path from 'path';

/** Shared config for application that can be required in many places */

dotenv.config({
  path: path.resolve(__dirname, '../../.env')
});

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

function getDatabaseUri(): string {
  return (process.env.NODE_ENV === "test")
    ? "michigan_test"
    : process.env.DATABASE_URL || "michigan_facts";
}

module.exports = {
  SECRET_KEY,
  PORT,
  getDatabaseUri,
};