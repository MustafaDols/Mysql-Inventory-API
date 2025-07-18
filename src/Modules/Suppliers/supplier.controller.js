import { Router } from "express";
import * as Services from "./Services/supplier.services.js";
const router = Router();



router.post("/MODIFYContactNumber",Services.MODIFYContactNumber)
router.post("/AddSupplier",Services.AddSupplier)
router.get("/SupplierNameStartWithF",Services.SupplierNameStartWithF)

export default router;