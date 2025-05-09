const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{timestamps:true})

const facilityModel = mongoose.model("facility",facilitySchema);
module.exports = facilityModel;