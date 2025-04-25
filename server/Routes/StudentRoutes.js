const express = require('express');
const router = express.Router();
const Student = require('../Models/Student');

// GET all students
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// GET single student by ID
router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

// CREATE a student
router.post('/', async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.status(201).json(newStudent);
});

// UPDATE a student
router.put('/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE a student
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
