import express from "express";
import assigneRouteVehicleController from "../Controller/assigneRouteVehicleController.js";

const assigneRouteVehicleRouter = express.Router();

assigneRouteVehicleRouter.put("", assigneRouteVehicleController);

export default assigneRouteVehicleRouter;