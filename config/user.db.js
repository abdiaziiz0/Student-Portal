const mongoose = require("mongoose");
// const local_uri = "mongodb://localhost:27017/Student-server";
const mongodb_uri = "mongodb+srv://abdelaziz1:.Grr5GdLGy9dvx8@cluster0.5anabn8.mongodb.net/Student-server?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, // 10 seconds timeout
})
.then(() => {
    console.log("Connected to mongoDB successfully!");
})
.catch((err) => {
    console.log("Failed to connect to mongodb")
    
})

module.exports = mongoose;