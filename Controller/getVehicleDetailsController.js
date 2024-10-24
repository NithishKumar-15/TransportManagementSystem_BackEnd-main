import VehicleDetailModel from "../Model/VehicleDetailsModel.js";

const getVehicleDetailsController = async (req, res) => {
    try {
        //Get the data of the vehicles
        const vehicleDetails = await VehicleDetailModel.find().select({ _id: 0, AssignedRoute: 0 });
        res.send({ message: "success", vehicleDetails });
    } catch (e) {
        res.status(500).send({ message: "internal server error" });
    }
}
export default getVehicleDetailsController;