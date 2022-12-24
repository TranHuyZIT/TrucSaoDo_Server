const express = require("express");
const router = express.Router();
const ThongKeController = require("../controllers/ThongKeController");
router.get("/diemtru", ThongKeController.getDiemTruTheoTuan);

module.exports = router;
