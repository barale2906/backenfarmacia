import {Router} from 'express';
import { createFacturaDetalle, deleteFacturaDetalle, getFacturaDetalle, getFacturaDetalles, updateFacturaDetalle } from '../controllers/facturaDetalle.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createFacturaDetalle);
  router.get("/", getFacturaDetalles);
  router.put("/:id", updateFacturaDetalle);  
  router.get("/:id", getFacturaDetalle);
  router.delete("/:id", deleteFacturaDetalle);
  
  export default router;