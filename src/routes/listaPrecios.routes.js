import {Router} from 'express'
import { createListaPrecio, getExisteProLp, getListaPrecio, getListaPrecioDeta, getListaPrecios, updateListaPrecio } from '../controllers/listaPrecios.controller.js';

const router = Router();
  
  // Routes
  router.post("/", createListaPrecio);
  router.get("/", getListaPrecios);
  router.put("/:id", updateListaPrecio);  
  router.get("/:id", getListaPrecio);

  router.get("/:de/deta", getListaPrecioDeta); // DEtalle de un registro de lista de precios
  router.get("/:enc/:pro", getExisteProLp) // Verifica si el producto existe en la lista de precios
  
  export default router;