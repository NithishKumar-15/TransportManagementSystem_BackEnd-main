import Express from "express";
import getVehicleDetailsController from "../Controller/getVehicleDetailsController.js";

const getVehicleDetailsRouter = Express.Router();

getVehicleDetailsRouter.get("", getVehicleDetailsController);

export default getVehicleDetailsRouter;