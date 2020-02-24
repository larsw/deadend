// (c) 2020 Lars Wilhelmsen - MIT licensed. See LICENSE for details.

const path    = require('path')
const express = require('express')
const morgan  = require('morgan')
const hbs     = require('hbs')

const app = express()
const router = express.Router()

// Setup logging to stdout
app.use(morgan('combined'))

// Serve static assets from /assets
app.use('/assets', express.static(path.join(__dirname, "assets")))

// Use handlebars (hbs) as view engine with the html extension
app.set('view engine', 'html')
app.engine('html', hbs.__express)

app.use('/', (req, res, next) => {
  res.render('index', { ip: req.ip })
})

const port = process.env.PORT || 3000

app.listen(process.env.PORT || port, () => {
  console.log(`*deadend* is up and running on port ${port}`)
})

