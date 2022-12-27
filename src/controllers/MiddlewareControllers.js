const db = require("../database/connect");
const SoCoDo = require("../models/SoCoDo");
const {
  getCurrentTimestamp,
  convertDateString,
} = require("../utils/commonUtils");
const MiddlewareControllers = {
  updateTimeStampSCD: async (req, res, next) => {
    try {
      const { ma_so } = req.body;
      const timestamp = getCurrentTimestamp();
      const socodo = await SoCoDo.find("", "", ma_so);
      await SoCoDo.update(ma_so, {
        ...socodo[0],
        NGAY_BD: convertDateString(socodo[0].NGAY_BD),
        NGAY_KT: convertDateString(socodo[0].NGAY_KT),
        UPDATED_AT: timestamp,
      });
      next();
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};

module.exports = MiddlewareControllers;
