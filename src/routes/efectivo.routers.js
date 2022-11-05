import {Router} from 'express';
import { createEfectivo, deleteEfectivo, getEfectivo, getEfectivoMovimiento, getEfectivos, getEfectivoUser, updateEfectivo } from '../controllers/efectivo.controller.js';


const router = Router();
  
  // Routes
  router.post("/", createEfectivo);
  router.get("/", getEfectivos);
  router.put("/:id", updateEfectivo);  
  router.get("/:id", getEfectivo);
  router.delete("/:id", deleteEfectivo);

  router.get("/:id/bodega", getEfectivoMovimiento) // Muestra los movimientos por bodega
  router.get("/:id/user", getEfectivoUser) // Muestra los movimientos por bodega

  
  export default router;