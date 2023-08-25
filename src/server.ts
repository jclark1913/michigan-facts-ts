"use strict";

const app = require("./app");
const { PORT } = require(".src/config/config");

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});