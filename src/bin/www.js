"use strict";

const app = require("../app");
// app.js에 app을 사용하는 것인데 app.js에서도 module.exports = app;을 해줘야 사용할 수 있음
const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});
// listen이 서버를 가동시키는 명령어
