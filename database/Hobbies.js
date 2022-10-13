var MongoClient = require("mongodb").MongoClient;
var url = "INSERT URL HERE";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("personalWebsite");
  var myobj = [
    {
      hobbyName: "Cars",
      description:
        "I love cars since I was a kid, and currently I own one of my dream cars, which is a Honda S2000, the other two dreams cars I have is a 1998 Honda NSX and Porsche 911 964 Turbo S. I love them since Gran Turismo 2",
    },
    {
      hobbyName: "Music",
      description:
        "You'll see me listening to music or talking about it at least once. I listen at least a whole new album for me per day to expand my taste on music. Music is literally my life since I was a kid, I also play guitar, piano and bass.",
    },
  ];
  dbo.collection("Hobbies").insertMany(myobj, function (err, result) {
    if (err) throw err;
    console.log("Number of documents inserted: " + result.insertedCount);
    db.close();
  });
});
