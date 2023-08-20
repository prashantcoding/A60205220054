const express=require("express");
const { Trains } = require("../Controller/TrainController");
var router=express.Router();


router.route('/train').get(Trains);

module.exports=router;