import express from "express";
import { getAllItems, getMenu, updateMenu } from "../controller/menu.controller.js";
import { addItem } from "../controller/item.controller.js";

const router = express.Router();

// GET Routes
router.route("/items").get(getAllItems);
router.route("/menus").get(getMenu)

// POST Routes
router.route("/update").post(updateMenu);
// router.route("/menus").post(saveMenuSelected);

router.route("/add").post(addItem);

export default router;