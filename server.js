const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const petRoutes = require('./routes/pets');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT||5000;
// middleware

app.use(cors());
app.use(express.json());

// MongoDB connection 
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('mongoDB connected'))
.catch(err=>console.error('MongoDB error:',err));

// routes
app.use('/api/pets',petRoutes);

// Start Server
app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`));