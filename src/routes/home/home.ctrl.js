"use strict";

const hello = (req, res) => {
  // 브라우저에게 응답, 요청을 하기 위해서 req, res를 가져옴
  res.render("home/index");
  //   views에 index.ejs 실행
};

const login = (req, res) => {
  // 브라우저에게 응답, 요청을 하기 위해서 req, res를 가져옴
  res.render("home/login");
  //   views에 index.ejs 실행
};

module.exports = {
  hello,
  login,
};
