const ChiTietSoCoDo = require("../models/ChiTietSoCoDo");

const Chitiet_scdController = {
  addChiTietSCD: async (req, res) => {
    try {
      const { ngay, ma_so, thu, tenHS } = req.body;
      let newChiTiet = new ChiTietSoCoDo(ngay, ma_so, thu, tenHS);
      newChiTiet = await newChiTiet.save();
      return res.status(200).json(newChiTiet);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  findBySCD: async (req, res) => {
    try {
      const ngay = req.body.ngay;
      const ma_so = req.body.ma_so;
      const result = await ChiTietSoCoDo.find(ngay, ma_so);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  updateChiTietSCD: async (req, res) => {
    try {
      const ngay = req.body.ngay;
      const ma_so = req.body.ma_so;
      const newChiTietSoCoDo = req.body.newChiTietSoCoDo;
      const result = await ChiTietSoCoDo.update(ngay, ma_so, newChiTietSoCoDo);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};

module.exports = Chitiet_scdController;
