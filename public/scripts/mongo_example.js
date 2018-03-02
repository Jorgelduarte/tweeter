const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err){
        console.error(`Failed to connect to ${MONGODB_URI}`);
        throw err;
    }
    console.log(`Connected to mongodb: ${MONGODB_URI}`);

    function getTweets(cb){
        db.collection("tweets").find().toArray ((err, tweets) => {
            if (err){
                return cb(err);
            }
            cb(null, tweets)
        });  
    }

    getTweets((err, tweets) => {
        if (err) {
            throw err;
        }
        console.log("Loggin each tweet: ")
        for (let tweet of tweets){
            console.log(tweet)
        }
        db.close();
    });
});