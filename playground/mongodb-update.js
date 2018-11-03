// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5bdcb9b9592209c260f41c08")
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(res => {
    //     console.log(res);
    //   });

    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5bdca2a4cf9b0008f8c97553")
        },
        {
          $set: {
            name: "Anita"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(res => {
        console.log(res);
      });

    // db.close();
  }
);
