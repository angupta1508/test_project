const jwt = require("jsonwebtoken");
const User = require("../Model/User");


const auth = async (req, res, next) => {
    try {
        console.log("auth");
        const token = req.cookie.jwtoken;
        console.log(token);
        const userId = await jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({ "_id": userId._id.toString(), "tokens.token": token });
        if (!user) {
            throw new Error("User is not Autenticate");
        }
        req.token = token;
        req.user = user;
        req.userID = user._id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("User is not Autenticate");
    }

}

module.exports = auth;