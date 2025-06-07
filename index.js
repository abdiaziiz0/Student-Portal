const express = require("express");
const app = express();

require("./config/user.db");
const PORT = 5000;

const userRouter = require("./router/user.router");
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome to the express server!"
    })
});

app.use("/user", userRouter)

app.listen(PORT, () => {
   console.log("Server is running on port 5000");
})