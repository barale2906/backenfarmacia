import {Router} from 'express'
import { createBasico, getBasico, getBasicos, updateBasico } from '../controllers/basicos.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createBasico);
  router.get("/", getBasicos);
  router.put("/:id", updateBasico);
  router.get("/:id", getBasico);
  
export default router;