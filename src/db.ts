"use strict";

/** Database setup */

import { Client } from "pg";
import { getDatabaseUri } from "./config/config";

export const db = new Client({
  connectionString: getDatabaseUri(),
});

db.connect();