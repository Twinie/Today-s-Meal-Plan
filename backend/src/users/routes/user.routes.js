import express from "express";
import { getAllUsers, selectedUser } from "../controller/user.controller.js";

const router = express.Router();

// GET Routes
router.route("/users").get(getAllUsers);

// POST Routes
router.route("/select/:id").post(selectedUser);

export default router;