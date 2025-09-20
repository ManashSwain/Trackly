import { getUser } from "../Controllers/user.controller.js";
import express from "express";
const router = express.Router();

router.route("/").get(getUser);

export default router;