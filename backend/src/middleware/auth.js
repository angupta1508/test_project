const jwt = require("jsonwebtoken");
const User = require("../Model/User");


const auth = async (req, res, next) => {
    try {
        let token = req.header("Authorization");
        if(!token){
            res.status(401).json({ message: "Unauthorized HTTP, Token not provided" });
        }
        token = token.replace("Bearer ","");
        const userId = await jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({ "_id": userId._id.toString(), "tokens.token": token });
        if (!user) {
            res.status(401).json({ message: "User is not Autenticate" });
        }
        req.token = token;
        req.userData = user;
        req.userID = user._id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("User is not Autenticate");
    }

}

module.exports = auth;