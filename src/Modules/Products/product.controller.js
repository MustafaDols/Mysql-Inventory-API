import { Router } from "express";
import * as Services from "./Services/product.services.js";
const router = Router();



 router.post("/AddColumnCategory",Services.AddColumnCategory)
 router.delete("/removeColumnCategory",Services.removeColumnCategory)
 router.post("/AddNotNULLConstraint",Services.AddNotNULLConstraint)
 router.get("/RetrieveTotalQuantity",Services.RetrieveTotalQuantity)
 router.get("/GetHighestStockProduct",Services.GetHighestStockProduct)
 router.get("/productsThatHaveNeverBeenSold",Services.productsThatHaveNeverBeenSold)
 router.post("/insertproducts",Services.insertproducts)
export default router;