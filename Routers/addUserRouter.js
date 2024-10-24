import Express from "express";
import AddUserDriverCollection from "../Controller/addUserDriver.js";

const addUserDriverRouter = Express.Router();

addUserDriverRouter.post("", AddUserDriverCollection);

export default addUserDriverRouter;