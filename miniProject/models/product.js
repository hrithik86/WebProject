const mongoose=require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    category:String,
    company:String
});

module.exports=mongoose.model("Product",productSchema);