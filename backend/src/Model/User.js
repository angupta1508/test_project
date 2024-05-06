const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    "name": {
        "type": String,
        "required": true
    },
    "email": {
        "type": String,
        "unique": true,
        "required": true
    },
    "phone": {
        "type": String,
        "required": true
    },
    "password": {
        "type": String,
        "required": true
    },
    "status": {
        "type": Boolean,
        "default": true
    },
    "tokens": [{
        "token": {
            type: String,
            required: true,
        }
    }]
});

userSchema.methods.generateToken = async function(next) {
    try {
        const token = await j
        wt.sign({ "_id": this._id.toString() }, process.env.JWT_KEY);
        this.tokens =  this.tokens.concat({token});
        await this.save();  
        return token;
    } catch (error) {
        console.log(error);
    }
}

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

const User = mongoose.model("user", userSchema);

module.exports = User;