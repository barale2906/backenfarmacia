import {Router} from 'express'
import { activProducto, createProducto, getInventarioLP, getListaPrecios, getProducto, getProductos, updateProducto } from '../controllers/producto.controller.js';




const router = Router();
  
  // Routes
  router.post("/", createProducto);
  router.get("/", getProductos);
  router.put("/:id", updateProducto);
  router.delete("/:id/:status", activProducto);
  router.get("/:id", getProducto);

  router.get("/:bodega/precios", getListaPrecios); // muestra el listado de productos incluyendo el encabezado de la lista de precios

  router.get("/:encab/lp", getInventarioLP); // muestra los productos cargados a la lista de precios
  
export default router;