const NotificationModel = require('../Models/notification');


exports.addNotification = async(req,res)=>{
    try{
       


        // Watch Video For FUll Code








    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.getNotifications = async(req,res)=>{
    try{
        const notifications = await NotificationModel.find().sort({createdAt:-1});
        return res.status(200).json({
            message:"Notifications Fetched Successfully",
            notifications
        })
    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}

exports.deleteNotificationById=async(req,res)=>{
    try{
        const {id} = req.params;
       


        // Watch Video For FUll Code







        return res.status(400).json({
            error:"No Such Notification Found"
        });
    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Something Went Wrong",
            issue: err.message
        })
    }
}