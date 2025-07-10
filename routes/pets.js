const express = require('express');
const Pet = require('../models/Pet');
const router = express.Router();

// GET /api/pets
router.get('/',async(req,res)=>{
    try{
        const pets=await Pet.find();
        res.json(pets)
    }
    catch(error){
        res.status(500).json({error:'Server Error'});
    }
});
module.exports=router;