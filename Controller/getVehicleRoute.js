import VehicleRouteModel from "../Model/RoutesModel.js";

const getVehicleRouteController = async (req, res) => {
    try {

        //Get the route of the vehicle
        const vehicleRouteDetails = await VehicleRouteModel.find().select({ _id: 0, AssignedVehicle: 0 });
        res.send({ message: "success", vehicleRouteDetails });
    } catch (e) {
        res.status(500).send({ message: "internal server error" });
    }
}

export default getVehicleRouteController;