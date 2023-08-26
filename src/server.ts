"use strict";

import app from "./app";
import { PORT } from "./config/config";

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});