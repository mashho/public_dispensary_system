const HospitalModels = require('../Models/nearByHospitals');


exports.addNearByHospital = async(req,res)=>{
    try{

        


        // Watch Video For FUll Code






    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.getHospitals = async(req,res)=>{
    try{
        


        // Watch Video For FUll Code






    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.updateHospitalById = async(req,res)=>{
    try{

        const {id} = req.params;
        let body = {...req.body};
        

        


        // Watch Video For FUll Code







        return res.status(400).json({
            error:"No Such Hospital Found"
        });

    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.deleteHospitalById= async(req,res)=>{
    try{
        const {id} = req.params;
        const hospital = await HospitalModels.findByIdAndDelete(id);
        


        // Watch Video For FUll Code






        
    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}