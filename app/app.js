"use strict";
// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
// view를 관리해줄, 저장될 폴더명
app.set("view engine", "ejs");
//   view 엔진을 ejs로 한다는 것

// routes/home에 있는 js 파일을 불러오기

app.use("/", home);
// 미들웨어 등록해주는 메소드
// 루트로 오면 home으로 보내주라는 의미

module.exports = app;
