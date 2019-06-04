/*jshint esversion: 9 */

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('dramaList.db');

// db.serialize() 데이터베이스 메소드 순차 실행
db.serialize(_ => {
  // 테이블 생성
  db.run(`CREATE TABLE drama (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    actor TEXT NOT NULL
  )`, err => {
    if (err) console.log(err);
    else console.log('table created');
  });

  db.run(`INSERT INTO drama (title, actor) VALUES ('보디가드', 'MUM')`, err => {
    if (err) console.log(err);
    else console.log('data inserted');
  });
});