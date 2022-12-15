const express = require("express");
const router = express.Router();
const SocodoController = require("../controllers/SocodoController");

router.get("/", SocodoController.getAllSSD);
router.post("/add", SocodoController.createNewSoCoDo);

module.exports = router;
