const jwt = require("jsonwebtoken");
const User = require("../Model/User");


const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', "");
    const userId = await jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findOne({ "_id": userId._id.toString(), "tokens.token": token });
    if (!user){
        throw new Error();
    }
}
