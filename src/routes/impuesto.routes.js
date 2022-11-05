import {Router} from 'express'
import { activImpuesto, createImpuesto, getImpuesto, getImpuestos, updateImpuesto } from '../controllers/impuesto.controller.js';


const router = Router();
  
  // Routes
  router.post("/", createImpuesto);
  router.get("/", getImpuestos);
  router.put("/:id", updateImpuesto);
  router.delete("/:id/:status", activImpuesto);
  router.get("/:id", getImpuesto);
  
  export default router;