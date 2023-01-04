const db = require("../database/connect.js");
const { getCurrentTimestamp } = require("../utils/commonUtils.js");
class SoCoDo {
  constructor(ngayBD, ngayKT, L_ten, tuan) {
    this.ngayBD = ngayBD;
    this.ngayKT = ngayKT;
    this.L_ten = L_ten;
    this.tuan = +tuan;
  }
  async save() {
    const timestamp = getCurrentTimestamp();
    const sql = `INSERT INTO so_co_do (NGAY_BD, NGAY_KT, L_TEN, TUAN, UPDATED_AT) VALUES ('${this.ngayBD}', '${this.ngayKT}' , '${this.L_ten}', ${this.tuan}, '${timestamp}')`;
    const newPost = await db.execute(sql);
    return newPost;
  }
  static async findAll() {
    const [allSCD, ...rest] = await db.execute("SELECT * FROM so_co_do");
    return allSCD;
  }
  static async find(l_ten = null, tuan = null, ma_so = null, size) {
    let sql = "";
    if (l_ten && tuan) {
      sql = `SELECT * FROM so_co_do WHERE L_TEN = '${l_ten}' AND TUAN = ${tuan}`;
    } else if (l_ten) {
      sql = `SELECT * FROM so_co_do WHERE L_TEN = '${l_ten}'`;
    } else if (tuan) {
      sql = `SELECT * FROM so_co_do WHERE TUAN = ${tuan}`;
    } else if (ma_so) {
      sql = `SELECT * FROM so_co_do WHERE MA_SO = ${ma_so}`;
    } else if (!l_ten && !tuan && !ma_so) {
      return this.findAll();
    }
    if (size) {
      const [result, ...rest] = await db.execute(sql);
      return result.slice(0, Math.min(+size, result.length));
    }
    const [result, ...rest] = await db.execute(sql);
    return result;
  }
  static async update(ma_so, newSCD) {
    let sql = `UPDATE so_co_do SET MA_SO = ${ma_so}, NGAY_BD = '${newSCD.NGAY_BD}', NGAY_KT = '${newSCD.NGAY_KT}', L_TEN = '${newSCD.L_TEN}', TUAN = ${newSCD.TUAN}, UPDATED_AT = '${newSCD.UPDATED_AT}' WHERE MA_SO = ${ma_so} `;
    const [result, ...rest] = await db.execute(sql);
    return result;
  }
  static async findAndDelete(l_ten, tuan, maSo) {
    let sql = `DELETE
    FROM 
      so_co_do as scd 
    where 
      scd.MA_SO = ${maSo};
    `;
    if (l_ten && tuan) {
      let sql = `DELETE
    FROM 
      so_co_do as scd 
    where 
      scd.L_TEN = '${l_ten}' and scd.TUAN = ${tuan};
    `;
    }
    const [result, ...rest] = await db.execute(sql);
    return result;
  }
}

module.exports = SoCoDo;
