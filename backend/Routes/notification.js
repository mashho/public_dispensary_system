const express = require("express");
const router = express.Router();
const Authentication = require('../Authentication/auth');
const NotificationController = require('../Controllers/notification');

router.post("/add",Authentication.adminFacultyAuth,NotificationController.addNotification);
router.get("/get",NotificationController.getNotifications);
router.delete("/delete/:id",Authentication.adminFacultyAuth,NotificationController.deleteNotificationById)


 
 
// Watch Video For FUll Code
 
 
  
 
 


module.exports = router;