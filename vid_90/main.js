const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000
const fs = require("fs")

app.use('/blog', blog)

// app.use(express.static("public"))

// middleware 1 - logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.aryan = "i am aryan";
    fs.appendFileSync("logs.txt", `${Date.now() } is a ${req.method}\n`)
    console.log(`${Date.now() } is a ${req.method}`)
    next()
})

// middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.aryan = "i am iron";
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!' + req.aryan)
})

app.get('/about', (req, res) => {
    res.send('Hello About!')
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})