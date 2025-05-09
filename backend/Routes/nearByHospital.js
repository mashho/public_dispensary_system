const express = require("express");
const router = express.Router();
const Authentication = require('../Authentication/auth');
const HospitalController = require('../Controllers/nearByHospital');

router.post("/add",Authentication.adminFacultyAuth,HospitalController.addNearByHospital)
router.get("/get",HospitalController.getHospitals);

 
 
// Watch Video For FUll Code
 
 
  
 
 



module.exports = router;