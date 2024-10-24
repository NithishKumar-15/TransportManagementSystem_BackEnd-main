import mongoose from "mongoose";

const RoutesSchema = new mongoose.Schema({
    RouteName: String,
    AssignedVehicle: String,
})

const VehicleRouteModel = new mongoose.model("Routes", RoutesSchema, process.env.DB_ROUTECOLLECTION);

export default VehicleRouteModel;