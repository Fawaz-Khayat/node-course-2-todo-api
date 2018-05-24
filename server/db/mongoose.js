var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp' ,
    mlab: 'mongodb://fawwaz:671lHRdxRQWA@ds155644.mlab.com:55644/todoapp'
}
mongoose.connect(db.localhost,{
    useMongoClient:true
});

module.exports = {mongoose};