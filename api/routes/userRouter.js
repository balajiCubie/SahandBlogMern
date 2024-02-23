import express from "express";
import { test } from "../contoller/user.controller.js";
const router = express.Router();

router.get("/test", test);

export default router;
