const express  = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const userRouter = require("./router/user.router");

require("./config/user.db");

app.get("/", (req,res) => {
    res.send("Welcome to student portal server");
});

app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log("Server is running on port", 5000);
});