import VehicleDetailModel from "../Model/VehicleDetailsModel.js";

const addKilometerDetailsController=async(req,res)=>{
    try{
        //Initialize the data to add in database
        const data={
            Date:req.body.date,
            StartingKilometer:req.body.startingKilometer,
            EndingKilometer:req.body.endingKilometer
        }

        //If the vehicleNumber payload field is empty execute else condition
        if(req.body.vehicleNumber!=""){
            await VehicleDetailModel.updateOne({VehicleNumber:req.body.vehicleNumber},{$push:{KilometerDriven:data}})
        }else{
            await VehicleDetailModel.updateOne({AssignedRoute:req.body.route},{$push:{KilometerDriven:data}})
        }

        res.send({message:"data update success"})
    }catch(e){
        res.status(500).send({ message: "internal server error" });
    }
}

export default addKilometerDetailsController;