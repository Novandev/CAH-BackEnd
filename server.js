
const app = require('express')();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CAH', {useNewUrlParser: true});



//Socket.io has to use the http server
const server = require('http').Server(app);

app.use('/blackcards',require('./controllers/blackCards'))


server.listen('3000', () => {
    console.log('Server listening on Port 3000');
})