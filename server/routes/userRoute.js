import express from "express";
import {
  isAuth,
  login,
  logout,
  resister,
} from "../controllers/UserController.js";
import authUser from "../middlewares/authUser.js";

const userRouter = express.Router();

userRouter.post("/resister", resister);
userRouter.post("/login", login);
userRouter.get("/is-auth", authUser, isAuth);
userRouter.get("/logout", authUser, logout);

export default userRouter;
