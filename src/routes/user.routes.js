import {Router} from 'express'
import { createUser, deleteUser, getUser, getUserLogin, getUsers, updateUser } from '../controllers/user.controller.js';


const router = Router();

// Routes
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id/:status", deleteUser);
router.get("/:id", getUser);

router.get("/:email/login", getUserLogin); // Valida Usuario Login



export default router;