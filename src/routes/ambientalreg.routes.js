import {Router} from 'express'
import { createAmbienreg, deleteAmbienreg, getAmbienreg, getAmbienregs, updateAmbienreg } from '../controllers/ambienreg.controller.js';



const router = Router();

// Routes
router.get("/", getAmbienregs);
router.post("/", createAmbienreg);
router.put("/:id", updateAmbienreg);
router.delete("/:id", deleteAmbienreg);
router.get("/:id", getAmbienreg);

export default router;