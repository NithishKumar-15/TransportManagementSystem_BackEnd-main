import express from "express"
import getVehicleRouteController from "../Controller/getVehicleRoute.js";

const getVehicleRouteRouter = express.Router();

getVehicleRouteRouter.get("", getVehicleRouteController);

export default getVehicleRouteRouter;