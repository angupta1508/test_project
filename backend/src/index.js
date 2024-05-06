const express = require("express");
const app = express();
var cors = require('cors')
require("./config/conn")
require("dotenv").config();
const PORT = process.env.PORT || 8000
const UserRouter = require("./router/UserRouter");

var corsOptions = {
    origin: 'http://localhost:3000',
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json())
app.use(cors(corsOptions));
app.use(UserRouter);

app.listen(PORT, () => {
    console.log("Server Listen");
})


