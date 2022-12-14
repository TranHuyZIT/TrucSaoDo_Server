const mysql = require("mysql2");
const connectMYSQL = async () => {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "huy",
      password: "123456789",
      database: "saodo",
    });
    console.log("DB connected sucessfully");
    return db;
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMYSQL;
