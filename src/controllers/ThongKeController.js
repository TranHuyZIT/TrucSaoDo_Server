const db = require("../database/connect");
const ThongKeController = {
  getDiemTruTheoTuan: async (req, res) => {
    try {
      const tuan = req.query.tuan;
      const sql = `SELECT scd.L_TEN, sum(vp.DIEM_TRU) as DIEM_TRU  FROM so_co_do as scd 
      join chi_tiet_so_co_do as ctscd on scd.MA_SO
      join chi_tiet_vi_pham as ctvp on ctvp.NGAY = ctscd.ngay and scd.MA_SO = ctvp.MA_SO
      join vi_pham as vp on ctvp.VP_MA = vp.VP_MA
      where tuan = ${tuan}
      group by scd.L_TEN
      order by DIEM_TRU;`;
      const [result, ...rest] = await db.execute(sql);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
module.exports = ThongKeController;
