require('dotenv').config()
const app = require('express')();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/CAH', {useNewUrlParser: true});



//Socket.io has to use the http server
const server = require('http').Server(app);

app.use('/blackcards',require('./controllers/blackCards'))

app.use('/whitecards',require('./controllers/whiteCards'))

app.get('/',(req,res) =>{
    res.send('Runnign')
})
server.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on Port 3000');
})