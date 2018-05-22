//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({text:'Eat lunch'})
    //     .then((result)=>{
    //         console.log(result);
    //     });

    // db.collection('Todos').deleteOne({text:'Eat lunch'})
    //     .then((result)=>{
    //         console.log(result);
    //     });

    // db.collection('Todos').findOneAndDelete({completed:false})
    //     .then((result)=>{
    //         console.log(result);
    //     });

    // Challenge
    // db.collection('Users').deleteMany({
    //     name:'Fawaz'
    // })
    //     .then((result)=>{
    //         console.log(result);
    //     },(err)=>{
    //         console.log('Unable to delete documents');
    //     });

    db.collection('Users').findOneAndDelete({
        _id: ObjectID('5b03360c61876d08ac1ee71c')
    })
        .then((result)=>{
            console.log(JSON.stringify(result,undefined,2));
        },(err)=>{
            console.log(err);
        });

    db.close();
});

