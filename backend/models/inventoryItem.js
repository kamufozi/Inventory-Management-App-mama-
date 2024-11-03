const mongoose= require('mongoose');
const inventoryItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true, // this field is mandatory
    },
    quantity:{
        type:Number,
        required:true,
        min:0,
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
    category: {
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
});
const InventoryItem= mongoose.model('InventoryItem', inventoryItemSchema);
module.exports= InventoryItem;
const testItem = new InventoryItem({
    name : 'test item',
    quantity : 10,
    price:5.99,
    category:'test category',
    description:'this is a test item.',
});
testItem.save()
.then(()=>console.log('test item saved successfully'))
.catch(err=>console.error('error saving test item:',err));