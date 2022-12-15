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
}

module.exports = SoCoDo;
