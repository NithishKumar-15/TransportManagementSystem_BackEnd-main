import LoginModel from "../Model/LoginModel.js";
import bcrypt from "bcrypt";


const AddUserDriverCollection = async (req, res) => {
    try {

        //Check the user exist or not 
        const alreadyDataExist = await LoginModel.findOne({ Email: req.body.email });

        //If the user exist execute in else send message user already exist 
        if (alreadyDataExist === null) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const saveData = new LoginModel({
                UserName:req.body.userName,
                Email: req.body.email,
                Password: hashedPassword,
                Role: "Driver"
            })
            await saveData.save();
            res.send({ message: "Data Added successfully" });
        } else {
            res.send({ message: "User Already exist" });
        }

    } catch (e) {
        res.status(500).send({ message: "internal server error" });
    }
}

export default AddUserDriverCollection;
