const db = require("../database/connect.js");
class ChiTietViPham {
  constructor(ngay, ma_so, vp_ma, so_luong) {
    this.ngay = ngay;
    this.ma_so = ma_so;
    this.vp_ma = vp_ma;
    this.so_luong = so_luong;
  }
  async save() {
    const sql = `INSERT INTO chi_tiet_vi_pham (NGAY, MA_SO, VP_MA, SO_LUONG) VALUES ('${this.ngay}', ${this.ma_so} , ${this.vp_ma}, ${this.so_luong})`;
    const newChiTiet = await db.execute(sql);
    return newChiTiet;
  }
  static async find(ngay = null, ma_so = null, vpMa = null) {
    let sql = "";
    if (ngay && ma_so && vpMa) {
      sql = `SELECT * FROM chi_tiet_vi_pham WHERE ngay = '${ngay}' AND ma_so = ${ma_so} AND VP_MA = ${vpMa}`;
    } else if (ngay && ma_so) {
      sql = `SELECT * FROM chi_tiet_vi_pham WHERE ngay = '${ngay}' AND ma_so = ${ma_so}`;
    } else if (vpMa) {
      sql = `SELECT * FROM chi_tiet_vi_pham WHERE VP_MA = ${vpMa}`;
    } else if (!ngay && !ma_so && !vpMa) {
      sql = `SELECT * FROM chi_tiet_vi_pham`;
    }
    const [result, ...rest] = await db.execute(sql);
    return result;
  }
  static async update(ngay, ma_so, vpMa, newChiTietViPham) {
    console.log(newChiTietViPham);
    let sql = `UPDATE chi_tiet_vi_pham SET NGAY = '${newChiTietViPham.ngay}', MA_SO = ${newChiTietViPham.ma_so}, VP_MA = ${newChiTietViPham.vpMa}, SO_LUONG = ${newChiTietViPham.soLuong} WHERE NGAY = '${ngay}' and MA_SO = ${ma_so} and VP_MA = ${vpMa}`;
    const [result, ...rest] = await db.execute(sql);
    return result;
  }
}

module.exports = ChiTietViPham;
