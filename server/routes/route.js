import express from "express";
import {addData, getMessages, deleteMessage} from "../controller/listController.js";
import { submitSignUp, submitLogIn } from "../controller/SignUpController.js";
import { editMessage } from "../controller/listController.js";

const route=express.Router();

route.post("/add", addData);
route.get("/get", getMessages);
route.post("/delete", deleteMessage);
route.post("/authentication/signup", submitSignUp);
route.post("/authentication/login", submitLogIn);
route.post("/edit/:id", editMessage);

export default route;