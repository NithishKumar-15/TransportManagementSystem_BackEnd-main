import Express from "express";
import LoginController from "../Controller/login.js";

const loginRouter = Express.Router();

loginRouter.post("", LoginController);

export default loginRouter;