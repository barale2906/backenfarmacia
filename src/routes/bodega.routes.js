import {Router} from 'express'
import { createBodega, getBodegas, updateBodega, activBodega, getBodega } from '../controllers/bodega.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createBodega);
  router.get("/", getBodegas);
  router.put("/:id", updateBodega);
  router.delete("/:id/:status", activBodega);
  router.get("/:id", getBodega);
  
  export default router;