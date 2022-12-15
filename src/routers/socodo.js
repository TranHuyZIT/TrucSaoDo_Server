const express = require("express");
const Chitiet_scdController = require("../controllers/Chitiet_scdController");
const router = express.Router();
const SocodoController = require("../controllers/SocodoController");

router.get("/", SocodoController.getAllSCD);
router.get("/search", SocodoController.findSCD);
router.post("/add", SocodoController.createNewSoCoDo);
router.get("/chitietscd", Chitiet_scdController.findBySCD);
router.post("/chitietscd/add", Chitiet_scdController.addChiTietSCD);
router.put("/chitietscd/update", Chitiet_scdController.updateChiTietSCD);

module.exports = router;
