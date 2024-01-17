const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const authRoutes = require("./Routes/AuthRoutes")
const app =express();
const cookieParser = require("cookie-parser")


app.listen(4000, () => {
    console.log("Server is running on PORT 4000");
});

mongoose.connect("mongodb+srv://sanmi-auth:07049@cluster0.9wwaa3t.mongodb.net/", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(()=> {
    console.log("DB connection successful");
})

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
}))


app.use(cookieParser())
app.use(express.json()) // this enables access to json data in the API request
app.use("/", authRoutes)