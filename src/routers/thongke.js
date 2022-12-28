const express = require("express");
const router = express.Router();
const ThongKeController = require("../controllers/ThongKeController");
router.get("/diemtrutuan", ThongKeController.getDiemTruTheoTuan);
router.get("/diemtruso", ThongKeController.getDiemTruTheoSo);

module.exports = router;
