import sqlite from "sqlite3";

const db = new sqlite.Database("./data/database.sqlite");

export function dbAll(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}
export function dbGet(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}
export function dbRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(this);
      }
    });
  });
}
export async function initializeDatabase() {
  await dbRun("DROP TABLE IF EXISTS wizards");
  await dbRun(
    "CREATE TABLE IF NOT EXISTS wizards (id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING, wand STRING, house STRING)"
  );
  const wizards = [
    { name: "Harry", wand: "Apple", house: "Gryffindor" },
    { name: "Ron", wand: "Yew", house: "Ravenclaw" },
    { name: "Luna", wand: "Maple", house: "Slytherin" },
  ];

  for (const wizard of wizards) {
    await dbRun("INSERT INTO wizards (name, wand, house) VALUES (?, ?, ?);", [
      wizard.name,
      wizard.wand,
      wizard.house,
    ]);
  }
}
