const pool = require("./db");
// const mysql = require("mysql2");

// async function getAll() {
//   const [rows] = await pool.promise().execute(`SELECT * FROM student`);
//   console.log(rows);
//   return rows;
// }

// getAll();

// const pool = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "bootcamp_blog",
//   // database: "student_db",
// });

class DbStorage {
  constructor(tableName) {
    this._table = tableName;
  }
  async getAll() {
    const [rows] = await pool.promise().execute(`SELECT * FROM ${this._table}`);
    // console.log(rows);
    return rows;
  }
  async getById(id) {
    const [rows] = await pool
      .promise()
      .execute(`SELECT * FROM ${this._table} WHERE id = ?`, [id]);
    return rows[0];
  }
  async createUser(data) {
    const [meta] = await pool
      .promise()
      .execute(
        `INSERT INTO ${this._table} (name, surname, username, password) VALUES (?, ?, ?, ?)`,
        [data.name, data.surname, data.username, data.password]
      );
    return Object.assign({}, data, { id: meta.insertId });
  }
  //   async update(data) {
  //     const { id } = data;
  //     if (!id) throw new Error(`Missing "id" in data for DbStorage.update`);
  //     await pool
  //       .promise()
  //       .execute(
  //         `UPDATE ${this._table} SET name=?, age=?, gender=?, lastname=? WHERE id = ?`,
  //         [data.name, data.age, data.gender, data.lastname, id]
  //       );
  //     return data;
  //   }
  async delete(id) {
    if (!id) throw new Error(`Missing "id" in data for DbStorage.delete`);
    await pool.promise().execute(`DELETE FROM ${this._table} WHERE id=?`, [id]);
    return;
  }
}

module.exports = DbStorage;
