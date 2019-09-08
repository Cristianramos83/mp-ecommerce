const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.post('/pay', function(req, res) {
  // show congrats.html page example
  res.sendFile(__dirname + "/public/congrats.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))