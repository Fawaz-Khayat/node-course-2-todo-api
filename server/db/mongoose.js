var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp' ,
    mlab: 'mongodb://heroku:1234@ds155644.mlab.com:55644/todoapp'
}

const db_url = db.localhost || db.mlab ;
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