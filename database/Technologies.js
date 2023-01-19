var MongoClient = require('mongodb').MongoClient;
var url = "INSERT URL HERE";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("personalWebsite");
    var myobj = [
        { name: "Java", type: "ProgrammingLanguage", dateLearned: new Date("2016-09-01")},
        { name: "C#", type: "ProgrammingLanguage", dateLearned: new Date("2017-09-01")},
        { name: "Python", type: "ProgrammingLanguage", dateLearned: new Date("2018-05-01")},
        { name: "JavaScript", type: "ProgrammingLanguage", dateLearned: new Date("2018-01-01")},
        { name: "SQL Server", type: "Database", dateLearned: new Date("2017-01-01")},
        { name: "Oracle", type: "Database", dateLearned: new Date("2017-09-01")},
        { name: "Firebase NoSQL", type: "Database", dateLearned: new Date("2018-05-01")},
        { name: "MongoDB", type: "Database", dateLearned: new Date("2022-01-01")},
        { name: "Azure", type: "PublicCloudProviders", dateLearned: new Date("2018-09-01")},
        { name: "AWS", type: "PublicCloudProviders", dateLearned: new Date("2020-09-01")},
        { name: "Google Cloud", type: "PublicCloudProviders", dateLearned: new Date("2021-09-01")},
    ];
    dbo.collection("Technologies").insertMany(myobj, function(err, result) {
        if (err) throw err;
        console.log("Number of documents inserted: " + result.insertedCount);
        db.close();
    });
});