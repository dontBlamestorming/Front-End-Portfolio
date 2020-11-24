// Basic server set
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// session
const session = require("express-session");
// const fileStore = require("session-file-store")(session);

app.use(
  session({
    secret: "dasfkjnq#$dljkf!#!@#5",
    resave: false,
    saveUninitialized: true
  })
);

/**
 * @secret 노출되면 안된다.
 * @resave 세션 데이터가 바뀌기 전까지는 세션 저장소의 값을 save하지 않는다.
 * @saveUninitialized 세션이 필요한 전까지는 세션을 구동시키지 않는다.
 */

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init connect with database
const db = require("./database.js");
db.connect();

// server
app.post("/checkEmail", (req, res) => {
  const typedEmail = req.body.typedEmail;
  const sql = `SELECT mem_email FROM Authentication where mem_email = '${typedEmail}'`;

  db.query(sql, typedEmail, (err, result, fields) => {
    if (err) {
      throw err;
    } else if (result.length) {
      // 배열에 값이 있다면(아이디가 중복된다면)
      res.json({
        isDuplicate: false
      });
    } else if (!result.length) {
      // 배열에 값이 없다면(아이디가 중복되지 않았다면)
      res.json({
        isDuplicate: true,
        isDuplicateChecked: true
      });
    }
  });
});

app.post("/signIn/users", (req, res) => {
  const sql = "SELECT mem_email, mem_password FROM Authentication";
  const email = req.body.userId;
  const password = req.body.password;
  const params = [email, password];

  db.query(sql, params, (err, result, fields) => {
    if (err) {
      res.send("누구세요?");
      throw err;
    } else if (
      email == result[0].mem_email &&
      password == result[0].mem_password
    ) {
      res.json({ redirectURL: "/confirmedUser" });
      console.log("환영합니다.");
      res.end();
    }
  });
});

app.post("/signUp/users", (req, res, next) => {
  const sql =
    "INSERT INTO Authentication VALUES (null, ?, ?, ?, ?, ?, ?, ?, now(), 0)";
  const email = req.body.userId;
  const password = req.body.password;
  const nickname = req.body.nickname;
  const birthYear = req.body.birthYear;
  const birthMonth = req.body.birthMonth;
  const birthDay = req.body.birthDay;
  const gender = req.body.gender;
  const params = [
    email,
    password,
    nickname,
    birthYear,
    birthMonth,
    birthDay,
    gender
  ];

  db.query(sql, params, (err, result, fields) => {
    if (err) {
      next(err);
      // res.json({ isDuplicate : "Hello! Client!!!" });
      // res.end();
    } else if (result) {
      res.json({ redirectURL: "/confirmedUser" });
      console.log("회원가입을 축하드립니다.");
    }
  });
});

app.get("/signUp", (req, res, next) => {
  console.log(req.session);
});

app.use(function(req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.use(function(err, req, res, next) {
  // console.error(err.stack);
  res
    .json({
      signUpSubmitError: "공백이 있습니다. 정보를 입력해 주세요."
    })
    .status(500);
  //res.json이나 res.send 같은 형태로 전송하는 경우에는 이들이 일부 데이터를 보낸 뒤에 자동으로 응답 종료
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
