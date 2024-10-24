import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

import loginRouter from "./Routers/loginRouter.js";
import addUserDriverRouter from "./Routers/addUserRouter.js";
import getVehicleDetailsRouter from "./Routers/getVehicleDetailsRouter.js";
import getVehicleRouteRouter from "./Routers/getVehicleRouteRouter.js";
import dbConnection from "./DB/mongoDbAtlasConnection.js";
import assigneRouteVehicleRouter from "./Routers/assigneRouteVehicleRouter.js"
import addKilometerDetailsRouter from "./Routers/addKilometerDetailsRouter.js"


dotenv.config();

const middleware = async (req, res, next) => {
    try {
        await jwt.verify(req.headers.token, process.env.JWTSECREATKEY, (err, decoded) => {
            if (err) {
                res.send({ message: "UnAuthorized" })
            } else {
                next();
            }
        })
    } catch (e) {
        res.status(500).send({ message: "internal server error" });
    }
}
const server = express();

server.use(cors());

server.use(express.json());

await dbConnection();

server.use("/Login", loginRouter);

server.use("/AddUserDriver", middleware, addUserDriverRouter);
server.use("/GetVehicleDetails", middleware, getVehicleDetailsRouter)
server.use("/GetVehicleRoute", middleware, getVehicleRouteRouter);
server.use("/AssigneRouteVehicle", middleware, assigneRouteVehicleRouter);
server.use("/AddKilometerVehicle", middleware, addKilometerDetailsRouter);

server.listen(process.env.PORT, () => {
    console.log(`Server started`);
});