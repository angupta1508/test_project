const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testproject").then(() => {
    // console.log("Connection Successfully");
}).catch((e) =>
    console.log(`Error: ${e}`)
)