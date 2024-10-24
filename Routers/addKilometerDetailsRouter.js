import express from "express";
import addKilometerDetailsController from "../Controller/addKilometerDetailsController.js";

const addKilometerDetailsRouter = express.Router();

addKilometerDetailsRouter.put("", addKilometerDetailsController);

export default addKilometerDetailsRouter;