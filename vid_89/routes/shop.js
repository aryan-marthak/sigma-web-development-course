const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('SHOP HOME')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About shop')
})

// router.get('/item/:slug', (req, res) => {
//   res.send(`fetch the item for ${req.params.slug}`)
// })

module.exports = router