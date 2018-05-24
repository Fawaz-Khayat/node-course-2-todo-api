var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let database = {
    localhost: 'mongodb://localhost:27017/TodoApp' ,
    mlab: 'mongodb://heroku:1234@ds155644.mlab.com:55644/todoapp'
}
mongoose.connect(database.localhost || database.mlab,{
    useMongoClient:true
})
    .then(()=>{
        console.log('---------------------------');
        console.log('connection to mlab succeded');
        console.log('---------------------------');

    })
    .catch((error)=>{
        console.log('---------------------------');
        console.log('connection to mlab failded ');
        console.log(error);
        console.log('---------------------------');
    });

module.exports = {mongoose};