import {Router} from 'express'
import {
    getAmbienUbis,
    createAmbienUbi,
    updateAmbienUbi,
    getAmbienUbi,
    deleteAmbienUbi,
    getAmbienreg,
    getRegHoyTemperatura,
    getRegHoyHumedad,
    
  } from "../controllers/ambienubi.controller.js";
  
  const router = Router();
  
  // Routes
  router.post("/", createAmbienUbi);
  router.get("/", getAmbienUbis);
  router.put("/:id", updateAmbienUbi);
  router.delete("/:id", deleteAmbienUbi);
  router.get("/:id", getAmbienUbi);
  
  router.get("/:id/ambientereg", getAmbienreg); // muestra los detalles por cada ubicación

  router.get("/:variable/temperatura", getRegHoyTemperatura); // Muestra los registros de hoy para temperatura
  router.get("/:variable/humedad", getRegHoyHumedad); // Muestra los registros de hoy para Húmedad Relativa
  
  export default router;