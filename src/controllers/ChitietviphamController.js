const ChiTietViPham = require("../models/ChiTietViPham");

const ChitietviphamController = {
  getByChiTietSCD: async (req, res) => {
    try {
      const { ngay, ma_so } = req.body;
      const result = await ChiTietViPham.find(ngay, ma_so);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  addChitiet: async (req, res) => {
    try {
      const { ngay, ma_so, vpMa, soLuong } = req.body;
      let newChitiet = new ChiTietViPham(ngay, ma_so, vpMa, soLuong);
      newChitiet = await newChitiet.save();
      return res.status(200).json(newChitiet);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  updateChitiet: async (req, res) => {
    try {
      const { ngay, ma_so, vpMa, newChiTietViPham } = req.body;
      const result = await ChiTietViPham.update(
        ngay,
        ma_so,
        vpMa,
        newChiTietViPham
      );
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};

module.exports = ChitietviphamController;
