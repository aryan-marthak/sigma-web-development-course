
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hellmmamao World!')
})

app.get('/about', (req, res) => {
  res.send('about us')
})

app.get('/contact', (req, res) => {
  res.send('Hellmmamao contact!')
})

app.get('/blog', (req, res) => {
  res.send('Hellmmamao blog!')
})

app.get('/blog/:slug/:second', (req, res) => {
  //logic to fetch intro to js from the db//
  res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro to js from the db//
//   res.send('Hello intro to js!')
// })

// app.get('/blog/intro-to-py', (req, res) => {
//   //logic to fetch intro to py from the db//
//   res.send('Hello intro to python!')
// })

app.get('/', (req, res) => {
  res.send('Hellmmamao World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
