const express = require("express");
const Listing = require("./models/Listing");
const app = express();
 
const mongoose = require("mongoose");
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
async function main() {
  await mongoose.connect(MONGO_URL);
}
main().then((res)=>{console.log("Database connected...");}).catch(err => console.log(err));

const path = require("path");
app.set("views",path.join(__dirname,"/views"));

const port = 8080;
app.listen(port,async ()=>{
  let sample = new Listing({
    title: "dipanshu",
    description: "mewo",
    price: 9999999999,
    location: "Earth",
    country: "India",    
  });
    await sample.save();
    console.log("Server started...");
});

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

console.log(Listing);