// import express
import express from "express";

// import function from controller
import {
  showUsers,
  showUserByEmail,
  createUser,
  deleteUser,
} from "../controllers/user.js";

// init express router
const router = express.Router();

// Get All Product
router.get("/users", showUsers);

// Get Single Product
router.get("/users/:email", showUserByEmail);

// Create New Product
router.post("/users", createUser);

// Delete Product
router.delete("/users/:id", deleteUser);

// export default router
export default router;
