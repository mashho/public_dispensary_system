const express = require("express");
const router = express.Router();
const Authentication = require('../Authentication/auth');
const GallaryController = require('../Controllers/gallary');

router.post('/add',Authentication.adminFacultyAuth,GallaryController.addImage)

 
 
// Watch Video For FUll Code
 
 
  
 
 


module.exports = router;