const mongoose = require("mongoose");

const nearBySchema = new mongoose.Schema({
    name:{
        type:String,
    },
    address:{
        type:String,
    },
    contact:{
        type:String,
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }

}, { timestamps: true });

const nearByModel = mongoose.model("nearByHospital", nearBySchema);
module.exports = nearByModel;