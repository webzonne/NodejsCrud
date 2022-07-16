import { Router } from "express";
import {index, edit, update, add, deleted, done} from "../controllers/task.controller"
const router = Router();
// PROTOCOLO GET
router.get("/", index);
//INGRESAR PAGE EDIT
router.get("/edit/:id", edit);
//UPDATE
router.post("/edit/:id", update);
//PROTOCOL POST AGREGAR TAREA
router.post("/tasks/add", add);

//PROTOCOL DELETE BORRAR TAREA
router.get("/delete/:id", deleted);

// DONE
router.get("/done/:id", done);

export default router;
