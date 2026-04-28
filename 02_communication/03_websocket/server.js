const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

// express app -> http server -> websocket attach
// app -> server -> io
const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname + '/index.html'));
});

io.on('connection', (socket) => {
    console.log('connection established');

    // user1 -> server -> user1, user2, user3
    socket.on('chat message', (msg) => {
        console.log("recieved message", msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected!');
    });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server runing on ${port}`);
})