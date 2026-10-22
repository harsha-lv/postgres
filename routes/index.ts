import { Router } from "express";
import {
  createUsernameGet,
  createUsernamePost,
  deleteUsernames,
  getUsernames,
} from "../controllers/userController";

const router = Router();

router.get("/", getUsernames);
router.get("/new", createUsernameGet);
router.post("/new", createUsernamePost);
router.get("/delete", deleteUsernames);

export default router;
