import {Router} from 'express';
import { 
    createTecnicaEncabezado, 
    deleteTecnicaEncabezado, 
    getTecnicaEncabezados, 
    getTecnicaEncabezado, 
    updateTecnicaEncabezado,
    getFacturasPago
  } from '../controllers/tecnicaEncabezado.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createTecnicaEncabezado);
  router.get("/", getTecnicaEncabezados);
  router.put("/:id", updateTecnicaEncabezado);  
  router.get("/:id", getTecnicaEncabezado);
  router.delete("/:id/:status", deleteTecnicaEncabezado);
  router.get("/2/pago", getFacturasPago);
  
  export default router;