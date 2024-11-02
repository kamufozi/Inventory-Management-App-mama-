const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const mongoose = require ('mongoose');
const InventoryItem = require('./models/inventoryItem');
require('dotenv').config();
// Middleware to parse JSON
app.use(express.json());
//basic route
app.get('/',(req,res) => {
    res.send('Hello, Inventory Management App!');

});
app.post('/api/inventory', async (req, res)=>{
try {
    const newItem = new InventoryItem(req.body);
    await newItem.save();
    res.status(201).json ({message: 'Item added successfully',item: newItem});
}
catch (error){
    res.status(400).json({
    message:'Error adding item',error    
    });
}
});
app.get('/api/inventory', async (req, res) => {
    try {
        const items = await InventoryItem.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving items', error });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//start the server
mongoose.connect(process.env.MONGO_URI)
     .then(()=>{
        console.log('Connected to MongoDB');
    })
     .catch(err=> {
        console.error('Failed to connect to MongoDB', err)});
       
        