const express = require('express')
const app = express()
const port = 3000
const campusController = require('./controllers/campusController')

app.get('/', (req, res) => {
    res.send('Buenas')
})

app.get('/v1/students', (req, res) => {
    const students = campusController.getStudents()
    res.json(students)
})

app.listen(port, () => {
    console.log(`Example app listetening on port ${port}`);
})