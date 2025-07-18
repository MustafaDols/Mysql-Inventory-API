import express from "express";
import dbConnection from "./DB/db.connection.js";
import  productController from "./Modules/Products/product.controller.js";
import  salesController from "./Modules/Sales/sales.controller.js";
import  supplierController from "./Modules/Suppliers/supplier.controller.js";
const app = express();
//Database connection
await dbConnection();

app.use(express.json());
app.use("/products",productController);
app.use("/sales",salesController);
app.use("/suppliers",supplierController);

app.use((err,req,res,next)=>{
        res.status(500).json({message:"something went wrong"})
})
app.listen(3000,()=>console.log("server running on port 3000"));


