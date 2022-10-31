import { Router } from "express";
import { addUserMiddleware } from "../controllers/user_controller.js";
const router_user = Router();
router_user.route("/user").post(addUserMiddleware, (req, res) => {});

export default router_user;
