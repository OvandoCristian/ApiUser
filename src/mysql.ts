import mysql from "mysql2/promise";

export function createPool() {
  return mysql.createConnection({
    host: "52.204.207.150",
    user: "apirest",
    password: "password",
    port: 3306,
    database: "mysql",
  })
};
