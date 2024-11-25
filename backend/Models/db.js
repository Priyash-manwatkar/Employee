const mongoose = require('mongoose');

const mongo_url = "mongodb://127.0.0.1:27017/fakewhatsapp";

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...')
    }).catch((err) => {
        console.log('Error while MongoDB connecting ...', err);
    })