const express = require('express')


const app = express()

app.get('/', function (req, res) {
    res.send('Thank You For Start Me')
})

app.listen(3000, () => console.log('listening to port 3000'))