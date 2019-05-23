const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const Product=require("./models/product");
const keys=require("./config/keys");
//body-parsermiddleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//accessing static files
app.use(express.static(__dirname+"/public"));

//connecting to Mlab servers
mongoose.connect(keys.mongo);

//mailgun
var api_key =keys.mailgun_apikey;
var domain = keys.mailgun_domain;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

// Product.insertMany({
//     name: "DVP-EH3 Series",
//     image: "https://i.postimg.cc/W433RLCM/DVP-EH2-S.jpg",
//     description: "The new generation DVP-EH3 PLC is the high-end model of the Delta DVP-E series.It provides larger program capacity and data registers for more demanding and complex applications.",
//     category:"PLC",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "DVP-EX Series",
//     image: "https://i.postimg.cc/c1YJGc95/DVP-ES-M.jpg",
//     description: " The EX series is the analog MPU with the lowest cost. Apart from supporting digital input and output, the EX series has built-in multiple analog I/O channels and integrates a variety of communication protocol’s for constructing a complete control network. EX series is suitable for all kinds of small PLC applications.",
//     category:"PLC",
//     company:"DELTA"
// });
// Product.insertMany({
//     name: "FX3U SERIES",
//     image: "https://i.postimg.cc/RCjncF82/fx-3u.jpg",
//     description: "Memory 64,000 step RAM memory built-in. Flash memory cassette can also be mounted. Processing speed Basic instruction: 0.065 μs/instruction (LD instruction) Application instruction: 0.642 to 100 μs/instruction Device Auxiliary relay: 7,680 pts Timer: 512 pts Counter: 235 pts Data register: 8,000 pts Extension register: 32,768 pts Extension file register (optional memory): 32,768 pts",
//     category:"PLC",
//     company:"MITSUBISHI"
// });
// Product.insertMany({
//     name: "DVP-ES2/EX2 Series",
//     image: "https://i.postimg.cc/XqwNKVB0/DVP-ES2-M.jpg",
//     description: `•	MPU points: 16 / 20 / 24 / 32 / 40 / 60
//     •	Program capacity: 16k steps
//     •	Built-in with 3 COM ports: 1 RS-232 port and 2 RS-485 ports, all are able to operate independently (Master/Slave)
//     •	Max. I/O points: 256 input points + 16 output points, or 256 output points + 16 input points
//     •	DVP-EX2 MPU is built in with 12-bit 4AD/2DA and offers analog/temperature modules of 14-bit resolution.
//     •	Built-in with 8 high-speed input points (2 points for 100kHz, 6 points for 10kHz) and supports U/D, U/D Dir, A/B counting modes
//     •	New motion control instructions: Close loop control, alignment mark, shield, immediate variable speed, S-Curve acceleration/deceleration
//     `,
//     category:"PLC",
//     company:"DELTA"
// });


Product.find({},(err,products)=>{
    if(err){
        console.log(err);
    }
    console.log(products);
});


// Routes
app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/categories/:categorytype",(req,res)=>{
    const categoryType=req.params.categorytype;
    Product.find({category:categoryType},(err,products)=>{
        if(err){
            console.log(err);
        }
        res.render("categoryProd.ejs",{products:products,categoryType:categoryType});  
    })
});

app.get("/categories/:categorytype/:company/:prodId",(req,res)=>{
    const categoryType=req.params.categorytype;
    const prodId=req.params.prodId;
    Product.findById(prodId,(err,product)=>{
        if(err){
            console.log(err);
        }
        // console.log(product);
        res.render("product.ejs",{product:product});  
    })
})

app.post("/",(req,res)=>{
    var name=req.body.txtName;
    var email=req.body.txtEmail;
    var phone=req.body.txtPhone;
    var msg=req.body.txtMsg;
    console.log(email);
    console.log(msg);
    console.log(name);

    var data = {
        from: name+ "<"+email+">",
        to: "evolteam86@gmail.com",
        subject: "Hello i am "+ name,
        text: msg
      };
       
      mailgun.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
        }else{
            // res.redirect("/");
            console.log(body);
        }
        
      });
})

app.listen(3000,()=>{
    console.log("server started on port 3000");
});