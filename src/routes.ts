import {Router} from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserControlller } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserControlller = new CreateUserControlller();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();
const listUserSendController = new ListUserSendComplimentsController();
const listUserReceivedController = new ListUserReceivedComplimentsController();
const listUserController = new ListUsersController();
const listTags = new ListTagsController();
router.post("/users" ,createUserControlller.handle);
router.post("/tags",ensureAuthenticated,ensureAdmin ,createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments",ensureAuthenticated, complimentController.handle);
router.get("/users/compliments/send",ensureAuthenticated, listUserSendController.handle);
router.get("/users/compliments/receive",ensureAuthenticated, listUserReceivedController.handle);
router.get("/tags",ensureAuthenticated, listTags.handle);
router.get("/users",ensureAuthenticated, listUserController.handle);
export {router}