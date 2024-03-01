const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.signup = async (req, res, next) => {
    try {
        const { name, email, phone, password } = req.body;
        // const createdData = await User.create(userData)
        bcrypt.hash(password, saltRounds, async function (err, hash) {
            try {
                console.log("entered in bcrypt");
                if (err) {
                    return res
                        .status(500)
                        .json({ message: "internal error by bcypt" });
                }
                const hashPass = hash;
                const createdData = await User.create({
                    name,
                    email,
                    phone,
                    password: hashPass,
                });
                return res.status(200).json(createdData);
            } catch (error) {
                console.log("error catch");
                next(error);
            }
        });
    } catch (error) {
        console.log("error catch");
        next(error);
    }
};
