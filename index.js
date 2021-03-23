const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const users = ["Nayem", "Mujahid", "Aminul", "Emon", "Moshiur"]

app.get('/', function (req, res) {
    const fruit = {
        products: 'Emon adar bapary',
        name: 'Emon Goru Chor'
    }
    res.send(fruit)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.short);
    const name = users[id];
    res.send({ id, name });

})

//post
app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 10
    res.send(user)
})

app.listen(4200, () => console.log('listening to port 4200'))