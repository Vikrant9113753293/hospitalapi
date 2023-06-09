const mongoose = require('mongoose');


//connect to DB
mongoose.connect('mongodb+srv://shawatul4:shawatul4@cluster0.pqf79dq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});