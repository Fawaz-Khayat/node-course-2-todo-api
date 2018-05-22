//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //         _id: new ObjectID('5b0370f8b75a0d9cec3063ff')
    //     },
    //     {
    //         $set:{
    //             completed: true
    //         }  
    //     },
    //     {
    //         returnOriginal:false
    //     })
    //         .then((result)=>{
    //             console.log(result);
    //         },(error)=>{});

    // challenge

    db.collection('Users').findOneAndUpdate(
        {
            _id: 123
        },
        {
            $set:{
                name:'Fawaz'
            },
            $inc:{
                age:1
            }
        },
        {
            returnOriginal:false
        }
    ).then((result)=>{
            console.log(result);
        });



    db.close();
});

