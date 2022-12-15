const express = require("express");
const connectMYSQL = require("./database/connect");
const dotenv = require("dotenv");
const SoCoDoRouter = require("./routers/socodo");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/socodo/", SoCoDoRouter);

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
