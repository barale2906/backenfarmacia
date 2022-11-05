import {Router} from 'express'
import { activProveedor, createProvee, getProveedor, getProveedores, updateProveedor } from '../controllers/proveedor.controller.js';
  
  const router = Router();
  
  // Routes
  router.post("/", createProvee);
  router.get("/", getProveedores);
  router.put("/:id", updateProveedor);
  router.delete("/:id/:status", activProveedor);
  router.get("/:id", getProveedor);
  
  export default router;