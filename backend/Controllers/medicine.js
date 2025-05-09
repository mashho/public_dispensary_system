const MedicineModels = require('../Models/medicine');


exports.addMedicine = async (req, res) => {
    try {

        


        // Watch Video For FUll Code






    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.getMedicine = async (req, res) => {
    try {
        const medicines = await MedicineModels.find().populate("addedBy", "name").sort({ createdAt: -1 });
        


        // Watch Video For FUll Code






    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.updateMedicineById = async (req, res) => {
    try {
        const { id } = req.params;
        let body = { ...req.body };


        const medicine = await MedicineModels.findByIdAndUpdate(id, { ...body, addedBy: req.user._id });
        if (medicine) {
            return res.status(200).json({
                message: "Medicines Updated Successfully",
            });
        }

        return res.status(400).json({
            error: "No Such Medicine Found"
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.searchMedicine = async (req, res) => {
    try {
        const { name } = req.query;
        


        // Watch Video For FUll Code







    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}


exports.deleteMedicineById = async(req,res)=>{
    try{

        const {id} = req.params;
        const medicine = await MedicineModels.findByIdAndDelete(id);
        


        // Watch Video For FUll Code






        return res.status(400).json({
            error:"No Such Medicine Found"
        });

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}