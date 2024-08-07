const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('time: ', Date.now());
  next()
})


// define the home page route 
router.get('/', (req, res) => {
  res.send('checking for route')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router