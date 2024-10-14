import express from 'express';
import Student from '../models/Student.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students' });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error creating student' });
  }
});

export default router;