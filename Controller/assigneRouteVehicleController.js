import VehicleRouteModel from "../Model/RoutesModel.js"
import VehicleDetailModel from "../Model/VehicleDetailsModel.js"

const assigneRouteVehicleController = async (req, res) => {
    try {

        //Update the route in vehicle details collection
        await VehicleDetailModel.updateOne({ VehicleNumber: req.body.vehcile }, { AssignedRoute: req.body.route });

        //Update the route in vehicle Rout collection
        await VehicleRouteModel.updateOne({ RouteName: req.body.route }, { AssignedVehicle: req.body.vehcile });
        res.send({ message: "data updated sucess" });
    } catch (e) {
        res.status(500).send({ message: "internal server error" });
    }
}

export default assigneRouteVehicleController;