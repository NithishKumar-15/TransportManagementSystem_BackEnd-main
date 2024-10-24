import mongoose from "mongoose"

const vehicleDetSchema = new mongoose.Schema({
    VehicleNumber: String,
    AssignedRoute: String,
    KilometerDriven: [{
        Date: {
            required: true,
            type: Date
        },
        StartingKilometer: {
            required: true,
            type: Number
        },
        EndingKilometer: {
            required: true,
            type: Number
        }
    }]

});

const VehicleDetailModel = new mongoose.model("vehicleDetails", vehicleDetSchema, process.env.DB_VEHICLECOLLECTION);

export default VehicleDetailModel;