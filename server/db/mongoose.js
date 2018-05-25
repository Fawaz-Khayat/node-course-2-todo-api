var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp' ,
    mlab: 'mongodb://heroku:1234@ds155644.mlab.com:55644/todoapp'
}

// if (process.env.NODE && ~process.env.NODE.indexOf("heroku")){
//     var db_url = db.mlab ;
// } else{
//     var db_url = db.localhost;
// }

const db_url = process.env.PORT ? db.mlab : db.localhost;
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