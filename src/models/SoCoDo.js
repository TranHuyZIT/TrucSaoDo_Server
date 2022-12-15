const db = require("../database/connect.js");
class SoCoDo {
  constructor(ngayBD, ngayKT, L_ten, tuan) {
    this.ngayBD = ngayBD;
    this.ngayKT = ngayKT;
    this.L_ten = L_ten;
    this.tuan = +tuan;
  }
  async save() {
    const sql = `INSERT INTO so_co_do (NGAY_BD, NGAY_KT, L_TEN, TUAN) VALUES ('${this.ngayBD}', '${this.ngayKT}' , '${this.L_ten}', ${this.tuan})`;
    const newPost = await db.execute(sql);
    return newPost;
  }
  static async findAll() {
    const [allSCD, ...rest] = await db.execute("SELECT * FROM so_co_do");
    return allSCD;
  }
  static async find(l_ten = null, tuan = null) {
    let sql = "";
    if (l_ten && tuan) {
      sql = `SELECT * FROM so_co_do WHERE L_TEN = '${l_ten}' AND TUAN = ${tuan}`;
    } else if (l_ten) {
      sql = `SELECT * FROM so_co_do WHERE L_TEN = '${l_ten}'`;
    } else if (tuan) {
      sql = `SELECT * FROM so_co_do WHERE TUAN = ${tuan}`;
    } else if (!l_ten && !tuan) {
      return this.findAll();
    }
    const [result, ...rest] = await db.execute(sql);
    return result;
  }
}

module.exports = SoCoDo;
