const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

// Attach the body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

app.post('/pay', function(req, res) {
    console.log(req.body)

    // show congrats.html page example
    res.sendFile(__dirname + "/public/congrats.html");
});

console.log('holaaaa');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))