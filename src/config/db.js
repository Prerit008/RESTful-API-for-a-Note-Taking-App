const mongoose = require('mongoose');


async function connectDB(uri) {
    if (mongoose.connection.readyState === 1) return;
    await mongoose.connect(uri);
    console.log('MongoDB connected');
}


module.exports = connectDB;