import { Router } from "express";
import * as Services from "./Services/sales.services.js";
const router = Router();


router.get("/getAllsales",Services.getAllSales)
router.post("/CreateAUser",Services.CreateAUser)

router.post("/GrantDELETE",Services.GrantDELETE)
router.post("/RevokeUPDATE",Services.RevokeUPDATE)


export default router;