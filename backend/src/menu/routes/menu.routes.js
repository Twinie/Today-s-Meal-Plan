import express from "express";
import { getAllItems, getMenu, saveMenuSelected, updateMenu } from "../controller/menu.controller.js";
import { getAllUsersRepo } from "../../users/models/user.repo.js";

const router = express.Router();

// GET Routes
router.route("/items").get(getAllItems);
router.route("/menus").get(getMenu)

// POST Routes
router.route("/update").post(updateMenu);
router.route("/menus").post(saveMenuSelected);

export default router;