"use strict";
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db_url = process.env.MONGODB_URI;
mongoose.connect(db_url,{
    useMongoClient:true
})
    .then(()=>{
        console.log('---------------------------');
        console.log('connection succeded');
        console.log('connected to ', db_url);
        console.log('---------------------------');

    })
    .catch((error)=>{
        console.log('---------------------------');
        console.log('connection failded ');
        console.log(error);
        console.log('---------------------------');
    });

module.exports = {mongoose};
JSON.stringify