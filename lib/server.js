const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Buenas')
})

app.listen(port, () => {
    console.log(`Example app listetening on port ${port}`);
})