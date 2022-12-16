const express = require("express");
const connectMYSQL = require("./database/connect");
const dotenv = require("dotenv");
const SoCoDoRouter = require("./routers/socodo");
const ViPhamRouter = require("./routers/chitietvipham");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/socodo/", SoCoDoRouter);
app.use("/vipham", ViPhamRouter);

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
