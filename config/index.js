const mongoose = require('mongoose')
async function connectDB() {
    try {
        const url = 'mongodb+srv://venkatesulu:Venky7597@cluster0.c69ewpe.mongodb.net/?retryWrites=true&w=majority'
        mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
        console.log('connected successfully');
    } catch (error) {
        console.log('connection not done');
    }
}
module.exports = connectDB;