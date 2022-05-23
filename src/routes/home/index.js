"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);
// (req, res) => {
//   // 루트 경로 설정
//   res.render("home/login");
// };
// 컨트롤러라고 불림
module.exports = router;
// router를 외부에서 사용할 수 있게 하는 명령
// app.js에서 실행을 해야하는데 router가 없어서 외부로 날림
