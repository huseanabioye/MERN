import express from "express"
import { createNote,  getAllNotes, getAllNotesById, updateNote, deleteNote } from "../controllers/notesController.js";


const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getAllNotesById);

router.post("/", createNote);

router.patch("/:id",updateNote);

router.delete("/:id", deleteNote)



export default router;