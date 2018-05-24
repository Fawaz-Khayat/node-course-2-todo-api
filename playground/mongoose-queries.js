const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b0602f71d0ea19420a47b0d';
var userId = '5b05aeb8a8bb80bc2cc72e26';

if (!ObjectID.isValid(id)){
    return console.log('ID not valid');
} else if(!ObjectID.isValid(id)){
    return console.log('User Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id)
//     .then((todo)=>{
//         if(!todo){
//             return console.log('Id not found');
//         }
//         console.log('Todo By Id', todo);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// Challenge

User.findById(userId)
    .then((user)=>{
        if(!user){
            return console.log('Id not found');
        }
        console.log('User By Id', user);
    })
    .catch((error)=>{
        console.log(error);
    });