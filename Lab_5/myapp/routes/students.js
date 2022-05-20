const express = require("express");
const fs = require("fs");
const router = express.Router();

let students = [];

router.get('/students', (req, res) => {
    const jsStudents = fs.readFileSync('./student.json', 'utf-8');
    res.send(jsStudents);
});

router.post('/students', (req, res) => {
    const newStudent = { id, firstName, lastName, group } = req.body;
    students.push(newStudent);
    fs.writeFile('./student.json', JSON.stringify(students), () => { });
    res.send(students);
});

router.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = fs.readFileSync("./student.json", "utf-8");
    const students = JSON.parse(content);
    const findStudent = students.find((student) => student.id === id);
    res.send(findStudent);
});

router.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = fs.readFileSync("./student.json", "utf-8");
    const students = JSON.parse(content);
    const student = students.find((student) => student.id === id);
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.group = req.body.group;
    fs.writeFile('./student.json', JSON.stringify(students), () => { });
    res.send();
});

router.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = fs.readFileSync("./student.json", "utf-8");
    var students = JSON.parse(content);
    students = students.filter((student) => student.id !== id);
    fs.writeFile('./student.json', JSON.stringify(students), () => { });
    res.send();
});

module.exports = router;
