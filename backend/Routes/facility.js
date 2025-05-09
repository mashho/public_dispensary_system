const express = require("express");
const router = express.Router();
const Authentication = require('../Authentication/auth');
const FacilityController = require('../Controllers/facility');

router.post('/add',Authentication.adminFacultyAuth,FacilityController.addFacility)

 
 
// Watch Video For FUll Code
 
 
  
 
 


module.exports = router;