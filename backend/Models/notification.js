const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }

}, { timestamps: true });

const notificationModel = mongoose.model("notification", notificationSchema);
module.exports = notificationModel;