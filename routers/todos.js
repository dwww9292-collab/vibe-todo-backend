const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// 할일 목록 조회
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 할일 생성
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 할일 수정
router.put("/:id", async (req, res) => {
  try {
    const { title, completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true, runValidators: true }
    );
    if (!todo) {
      return res.status(404).json({ message: "할일을 찾을 수 없습니다" });
    }
    res.json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 할일 일괄 삭제 (body.ids 배열로 다건 삭제, 없으면 전체 삭제)
router.delete("/", async (req, res) => {
  try {
    const { ids } = req.body || {};
    const filter = Array.isArray(ids) && ids.length > 0 ? { _id: { $in: ids } } : {};
    const result = await Todo.deleteMany(filter);
    res.json({ deletedCount: result.deletedCount });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 할일 개별 삭제
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "할일을 찾을 수 없습니다" });
    }
    res.json({ message: "삭제되었습니다", id: todo._id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
