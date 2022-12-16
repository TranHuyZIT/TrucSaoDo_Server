const db = require("../database/connect");
const CategoryController = {
  getAllViPham: async (req, res) => {
    try {
      const [result, ...rest] = await db.execute("SELECT * FROM vi_pham");
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  getAllLop: async (req, res) => {
    try {
      const [result, ...rest] = await db.execute("SELECT * FROM lop");
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
  getAllTuan: async (req, res) => {
    try {
      const [result, ...rest] = await db.execute("SELECT * FROM tuan");
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};

module.exports = CategoryController;
