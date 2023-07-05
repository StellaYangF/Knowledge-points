const express = require('express')

const app = express()

const port = 3000

app.get('/sugrec', (req, res) => {
  const { jsonp, wd } = req.query
  const result = [`${wd}`]

  res.type('text/javascript')
  res.send(`${jsonp}(${JSON.stringify(result)})`)
})

app.listen(port, () => console.log('--listening--'))