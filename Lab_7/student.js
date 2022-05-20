const express = require("express");
const router = express.Router();
const db = require("../lab7/db");

var day1 = new Date();
var day2 = new Date();

// Здесь такие же функции как и в прошлых лабах, но реализуется все через бд

router.get('/students', async(req, res) => {
    const students = await db.query("SELECT * FROM STUDENTS");
    res.json(students.rows);
});

router.post('/students', async(req, res) => {
    const {firstName, lastName, group_name} = req.body;
    const newStudent = await db.query("INSERT INTO STUDENTS (first_name, last_name, group_name, created_at, updated_at) VALUES ($1, $2, $3, $4, $5) RETURNING *",[firstName, lastName , group_name, day1.toISOString(), day1.toISOString()]);
    res.json(newStudent.rows[0]);

});

router.get('/students/:id', async(req, res) => {
    const id = req.params.id;
    const students = await db.query("SELECT * FROM STUDENTS WHERE id = $1", [id]);
    res.json(students.rows[0]);

});

router.put('/students/:id', async(req, res) => {
    const id = req.params.id;
    const {last_name, first_name, group_name} = req.body;
    const students = await db.query("UPDATE STUDENTS SET first_name = $1, last_name = $2, group_name = $3, updated_at = $4 WHERE id = $5 RETURNING *", [first_name, last_name, group_name, day2, id]);
    res.json(students.rows[0]);
});

router.delete('/students/:id', async(req, res) => {
    const id = req.params.id;
    const students = await db.query("DELETE FROM STUDENTS WHERE id = $1", [id]);
    res.json(students.rows[0]);
    
});

module.exports = router;
