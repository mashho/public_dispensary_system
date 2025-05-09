const HistoryModel = require("../Models/history");
const MedicineModel = require("../Models/medicine");

exports.addHistory = async(req,res)=>{
    try{

        let {roll,student,medicines} = req.body;
        
        let medicineData = medicines.map((item)=>{
            let {_id,name,requiredQuantity} = item;
            return {_id,name,requiredQuantity};
        })

        


        // Watch Video For FUll Code







    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.getHistoryByDate = async(req,res)=>{
    try{
        let {month,year} = req.query;
        const monthIndex = new Date(`${month} 1, ${year}`).getMonth(); // Convert month name to index (0-11)

        


        // Watch Video For FUll Code







        return res.status(200).json({
            message:"Fetched Successfully",
            history
        })

    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.getStudentHistory=async(req,res)=>{
    try{
        const {roll} = req.query;
        const history = await HistoryModel.find({roll}).populate("student").sort({createdAt:-1});
        


        // Watch Video For FUll Code







        
    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}