const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log('server is running on port' + PORT)
});

const io = socket(server);

io.on('connection', socket => {
    console.log("socket=", socket.id);
});