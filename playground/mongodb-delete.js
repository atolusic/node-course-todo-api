// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // deleteMany
    // db.collection("Users")
    //   .deleteMany({
    //     text: "eat govna"
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });

    // deleteOne
    // db.collection("Todos").deleteOne({ text: "eat govna" });

    // findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(res => {
    //     console.log(res);
    //   });

    // db.collection("Users").deleteMany({ text: "eat govna 2" });

    db.collection("Users")
      .findOneAndDelete({
        _id: new ObjectID("5bdcb7dd592209c260f41b5f")
      })
      .then(res => {
        console.log(JSON.stringify(res, undefined, 2));
      });

    // db.close();
  }
);
