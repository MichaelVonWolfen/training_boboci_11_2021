const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/boboci', ()=>{
    console.log("Connected to the database!")
});