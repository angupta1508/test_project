const express = require("express");
const User = require("../Model/User");
const router = express.Router();
const bcrypt = require("bcrypt");


router.get("/", (req, res) => {
    res.send("This is Home Page");
})

router.get("/about", (req, res) => {
    res.send("This is About Page");
})

router.get("/contact", (req, res) => {
    res.send("This is contact Page");
})

router.post("/register", async (req, res) => {
    try {
        let request = req.body;
        if (request.password !== request.cpassword) {
            res.send("Conform Password is should be matching").end();
        }
        delete request.cpassword;
        let user = new User(req.body);
        await user.generateToken();
        user = await user.save();
        res.status(201).json({ message: "User created Successfully" });
    } catch (error) {
        console.log(error);
    }


})

router.get("/signup", (req, res) => {
    res.send("This is signup Page");
})

router.get("/signin", (req, res) => {
    res.send("This is signin Page");
})


router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const checkPassword = await bcrypt.compare(password, user.password);
            if (!checkPassword) {
                res.status(400).json({ message: "Invalid Login Details" });
            }
            const token =  await user.generateToken();
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 10000),
                httpOnly:true
            });
            res.status(200).json({ message: "User Login Successfully" });
        } else {
            res.status(400).json({ message: "Invalid Login Details" });
        }

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;