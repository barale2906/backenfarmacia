import {Router} from 'express'
import { activProductlinea, createProductlinea, getProductlinea, getProductlineas, updateProductlinea } from '../controllers/productlinea.controller.js';



const router = Router();
  
  // Routes
  router.post("/", createProductlinea);
  router.get("/", getProductlineas);
  router.put("/:id", updateProductlinea);
  router.delete("/:id/:status", activProductlinea);
  router.get("/:id", getProductlinea);
  
  export default router;