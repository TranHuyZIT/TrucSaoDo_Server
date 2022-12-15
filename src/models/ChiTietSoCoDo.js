const db = require("../database/connect.js");
class ChiTietSoCoDo {
  constructor(ngay, ma_so, thu, tenHS) {
    this.ngay = ngay;
    this.ma_so = ma_so;
    this.thu = thu;
    this.tenHS = tenHS;
  }
  async save() {
    const sql = `INSERT INTO chi_tiet_so_co_do (NGAY, MA_SO, THU, TEN_HS_TRUC) VALUES ('${this.ngay}', ${this.ma_so} , ${this.thu}, '${this.tenHS}')`;
    const newChiTiet = await db.execute(sql);
    return newChiTiet;
  }
  static async find(ngay = null, ma_so = null) {
    let sql = "";
    if (ngay && ma_so) {
      sql = `SELECT * FROM chi_tiet_so_co_do WHERE ngay = '${ngay}' AND ma_so = ${ma_so}`;
    } else if (ngay) {
      sql = `SELECT * FROM chi_tiet_so_co_do WHERE ngay = '${ngay}'`;
    } else if (ma_so) {
      sql = `SELECT * FROM chi_tiet_so_co_do WHERE ma_so = ${ma_so}`;
    } else if (!ngay && !ma_so) {
      return this.findAll();
    }
    const [result, ...rest] = await db.execute(sql);
    return result;
  }
  static async update(ngay, ma_so, newChiTietSoCoDo) {
    let sql = `UPDATE chi_tiet_so_co_do SET NGAY = '${newChiTietSoCoDo.ngay}', MA_SO = ${newChiTietSoCoDo.ma_so}, THU = ${newChiTietSoCoDo.thu}, TEN_HS_TRUC = '${newChiTietSoCoDo.tenHS}' WHERE NGAY = '${ngay}' and MA_SO = ${ma_so}`;
    const [result, ...rest] = await db.execute(sql);
    return result;
  }
}

module.exports = ChiTietSoCoDo;
