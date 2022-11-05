import {Router} from 'express';
import { createFacturaEncabezado, deleteFacturaEncabezado, getFacturaEncabezado, getFacturaEncabezados, updateFacturaEncabezado } from '../controllers/facturaEncabezado.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createFacturaEncabezado);
  router.get("/", getFacturaEncabezados);
  router.put("/:id", updateFacturaEncabezado);  
  router.get("/:id", getFacturaEncabezado);
  router.delete("/:id", deleteFacturaEncabezado);
  
  export default router;