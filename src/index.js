const express = require("express");
const connectMYSQL = require("./database/connect");
const app = express();

const db = connectMYSQL();

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
