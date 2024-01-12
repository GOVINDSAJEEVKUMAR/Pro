const mongoose = require ('mongoose')

const FeedSchema = new mongoose.Schema({
    Username:{
        type :String,
        required:[true,"Please Provide a name"],

    },
    Message:{
        type :String,
        required:true,

    },
});

module.exports = mongoose.model("Feedback",FeedSchema);