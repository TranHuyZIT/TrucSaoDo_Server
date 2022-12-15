const SoCoDo = require("../models/SoCoDo");
const SocodoController = {
  getAllSSD: async (req, res) => {
    const q = "SELECT * FROM so_co_do";
  },
  createNewSoCoDo: async (req, res) => {
    try {
      const { ngayBD, ngayKT, L_ten, tuan } = req.body;
      let newSoCoDo = new SoCoDo(ngayBD, ngayKT, L_ten, tuan);
      newSoCoDo = newSoCoDo.save();
      return res.status(200).json({ newSoCoDo });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
module.exports = SocodoController;
