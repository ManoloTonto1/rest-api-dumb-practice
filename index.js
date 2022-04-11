const express = require('express');
const app = express();
const port =8080;
const path = require('path');

app.use(express.json());

app.listen( port, () => {
    console.log(`its alive on port http://localhost:${port}`);
});

app.get('/', (req, res) => {
    //res.send(console.log('hello world'));
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/user', (req, res) => {
    res.status(200).send({
        name: 'John',
        age: 30
    });
    
});

app.post('/user/:id', (req, res) => {

    const {id} = req.params;
    const {name, age} = req.body;

    if(!name){
        req.status(469).send('name is required');
    }

    res.send({
        user: `the name of the user is: ${name} and is ${age} years old`,
    });
});