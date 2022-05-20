const express = require("express");
const router = express.Router();

var students = [];

router.get('/students', (req, res) => { res.send(students); });

router.post('/students', (req, res) => {
    const newStudent = { id, firstName, lastName, group } = req.body;
    students.push(newStudent);
    res.send(students);
});

router.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const findStudent = students.find((student) => student.id === id);
    res.send(findStudent);
});

router.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((student) => student.id === id);
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.group = req.body.group;
    res.send();
});

router.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    students = students.filter((student) => student.id !== id);
    res.send();
});

module.exports = router;
