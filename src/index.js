const express = require("express");
const connectMYSQL = require("./database/connect");
const cors = require("cors");
const dotenv = require("dotenv");
const SoCoDoRouter = require("./routers/socodo");
const ChiTietViPhamRouter = require("./routers/chitietvipham");
const CategoryRouter = require("./routers/category");

dotenv.config();
const app = express();
app.use(express.json());
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/socodo/", SoCoDoRouter);
app.use("/chitietvipham", ChiTietViPhamRouter);
app.use("/category", CategoryRouter);

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
