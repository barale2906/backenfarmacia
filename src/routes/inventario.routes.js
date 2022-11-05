import {Router} from 'express'
import { createInventario, getinventafactura, getInventario, getInventarios, updateInventario } from '../controllers/inventario.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createInventario);
  router.get("/", getInventarios);
  router.put("/:id", updateInventario);  
  router.get("/:id", getInventario);
  router.get("/:bod/:producto", getinventafactura);
  
  export default router;