import {Router} from 'express'
import { createListaEncabezado, deleteListaEncabezado, getListaEncabezado, getListaEncabezados, getListaEncavigente, updateListaEncabezado } from '../controllers/listaPreciosEncabezado.controller.js';

const router = Router();
  
  // Routes
  router.get("/", getListaEncabezados);
  router.post("/", createListaEncabezado);
  router.get("/:id", getListaEncabezado);
  router.put("/:id", updateListaEncabezado); 
  router.delete("/:id/:status", deleteListaEncabezado) ;

  router.get("/:bod/vigente", getListaEncavigente);
  
  
  export default router;