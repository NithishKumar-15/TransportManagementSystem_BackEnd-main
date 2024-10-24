import LoginModel from "../Model/LoginModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const LoginController = async (req, res) => {
    try {
        const data = req.body;

        //If the role is admin execute 
        if (data.role === "Admin") {
            const payLoadData = await LoginModel.findOne({ Email: data.email, Password: data.password }).select({ _id: 0, Password: 0 });
            if (payLoadData != null) {
                const token = await jwt.sign({ ...payLoadData }, process.env.JWTSECREATKEY, { algorithm: "HS256", expiresIn: "15m" });
                res.send({ message: "Login Successful", token, payLoadData });
            } else {
                res.send({ message: "User Not Found" });
            }
        }
        //If the role is driver execute else
        else {
            const userExist = await LoginModel.findOne({ Email: req.body.email }).select({ _id: 0 });
            if (userExist != null) {
                const comparePassword = await bcrypt.compare(req.body.password, userExist.Password);
                if (comparePassword) {
                    const payLoadData = await LoginModel.findOne({ Email: req.body.email }).select({ _id: 0, Password: 0 });
                    const token = await jwt.sign({ ...payLoadData }, process.env.JWTSECREATKEY, { algorithm: "HS256", expiresIn: "15m" });
                    res.send({ message: "Login Successful", token, payLoadData });
                } else {
                    res.send({ message: "User Not Found" });
                }
            } else {
                res.send({ message: "User Not Found" });
            }
        }
    } catch (e) {
        res.status(500).send({ message: "internal server error" });
    }
}

export default LoginController;