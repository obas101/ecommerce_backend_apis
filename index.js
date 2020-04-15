const express = require('express');
const users = require('./users.json');

const app = express();

app.get('/', (req, res) => {
    res.send("Access the user Api by visiting 'localhost:1010/api/users'");
});

app.get('/api/users', (req, res) => {
    res.send(users);
});


const PORT = process.env.PORT || 1010
app.listen(PORT, () => console.log(`Server running on port ${PORT}`) );