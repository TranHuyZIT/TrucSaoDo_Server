const express = require("express");
const CategoryControllerr = require("../controllers/CategoryController");
const router = express.Router();

router.get("/vipham", CategoryControllerr.getAllViPham);
router.get("/lop", CategoryControllerr.getAllLop);
router.get("/tuan", CategoryControllerr.getAllTuan);

module.exports = router;
