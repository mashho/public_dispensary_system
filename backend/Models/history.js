const mongoose = require("mongoose");


const historySchema = new mongoose.Schema({
    roll:{
        type:String,
        required:true
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    medicines:[
        {
            name:{
                type:String,
            },
            requiredQuantity:{
                type:String
            }
        }
    ],
},{timestamps:true});

const historyModel = mongoose.model("history",historySchema);
module.exports = historyModel;