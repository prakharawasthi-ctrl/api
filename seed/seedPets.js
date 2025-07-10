const mongoose = require('mongoose');
const Pet = require('../models/Pet');
const petData = require('./seedData');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI,{
    userNewUrlParser:true,
    useUnifiedTopology:true,
}).then(async()=>{
    await Pet.deleteMany();
    await Pet.insertMany(petData);
    console.log('Seed Data inserted');
    mongoose.disconnect();
}).catch(err=>console.error('DB Error:',err));
















// De5KOVq6TKndEhH0
// prakharawasthi200230
// mongodb+srv://prakharawasthi200230:De5KOVq6TKndEhH0@api.5w8roio.mongodb.net/