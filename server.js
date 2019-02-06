const app = require('express')();

//Socket.io has to use the http server
const server = require('http').Server(app);




server.listen('3000', () => {
    console.log('Server listening on Port 3000');
})