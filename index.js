// ============================================
// 할일앱 백엔드 — Express + MongoDB
// ============================================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");
require("dotenv").config();

// Atlas SRV 조회가 로컬 DNS에서 막히는 환경 대응
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const Todo = require("./models/Todo");
const todosRouter = require("./routers/todos");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// 미들웨어
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// 기본 라우트
app.get("/", (req, res) => {
  res.send("할일앱 백엔드 서버가 실행 중입니다");
});

// 할일 라우터
app.use("/api/todos", todosRouter);

// MongoDB 연결
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("연결 성공");
  })
  .catch((err) => {
    console.error("MongoDB 연결 실패:", err.message);
  });

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다`);
});
