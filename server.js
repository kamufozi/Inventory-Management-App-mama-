const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const mongoose = require ('mongoose');
require('dotenv').config();
// Middleware to parse JSON
app.use(express.json());
//basic route
app.get('/',(req,res) => {
    res.send('Hello, Inventory Management App!');

});
//start the server
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
mongoose.connect(process.env.MONGO_URI)
     .then(()=>{
        console.log('Connected to MongoDB');})
     .catch(err=> {
        console.error('Failed to connect to MongoDB', err)});
     