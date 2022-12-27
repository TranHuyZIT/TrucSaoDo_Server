const express = require("express");
const ChitietviphamController = require("../controllers/ChitietviphamController");
const MiddlewareControllers = require("../controllers/MiddlewareControllers");
const router = express.Router();

router.get("/", ChitietviphamController.getByChiTietSCD);
router.post(
  "/add",
  MiddlewareControllers.updateTimeStampSCD,
  ChitietviphamController.addChitiet
);
router.put(
  "/update",
  MiddlewareControllers.updateTimeStampSCD,
  ChitietviphamController.updateChitiet
);
router.delete(
  "/delete",
  MiddlewareControllers.updateTimeStampSCD,
  ChitietviphamController.deleteChitiet
);
module.exports = router;
