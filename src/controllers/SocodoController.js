const SoCoDo = require("../models/SoCoDo");
const SocodoController = {
  getAllSCD: async (req, res) => {
    try {
      const allSCD = await SoCoDo.findAll();
      return res.status(200).json(allSCD);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  createNewSoCoDo: async (req, res) => {
    try {
      const { ngayBD, ngayKT, L_ten, tuan } = req.body;
      let newSoCoDo = new SoCoDo(ngayBD, ngayKT, L_ten, tuan);
      newSoCoDo = newSoCoDo.save();
      return res.status(200).json(newSoCoDo);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  findSCD: async (req, res) => {
    try {
      const l_ten = req.query.l_ten;
      const tuan = req.query.tuan;
      let result = await SoCoDo.find(l_ten, tuan);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
module.exports = SocodoController;
