const mongoose = require("mongoose");
const local_uri = "mongodb://localhost:27017/Student-server";

mongoose.connect(local_uri)
.then(() => {
    console.log("Connected to mongoDB successfully!");
})
.catch((err) => {
    console.log("Failed to connect to mongodb")
    
})

module.exports = mongoose;