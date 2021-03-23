const express = require('express')


const app = express()

const users = ["Nayem", "Mujahid", "Aminul", "Emon", "Moshiur"]

app.get('/', function (req, res) {
    const fruit = {
        products: 'Emon adar bapary',
        name: 'Emon Goru Chor'
    }
    res.send(fruit)
})
app.get('/fruits/banana', (req, res) => {
    res.send({ fruit: 'banana', quantity: 1000, price: 10000 })
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.short);
    const name = users[id];
    res.send({ id, name });

})

app.listen(4200, () => console.log('listening to port 4200'))