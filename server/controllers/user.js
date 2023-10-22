// Import function from Product Model
import {
  getUsers,
  getUserByEmail,
  insertUser,
  deleteUserById,
} from "../models/userModel.js";

// Get All Products
export const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get Single Product
// export const showUserById = (req, res) => {
//   getUserById(req.params.id, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };

// Get Single Product
export const showUserByEmail = (req, res) => {
  getUserByEmail(req.params.email, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Create New Product
export const createUser = (req, res) => {
  const data = req.body;
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Product
export const deleteUser = (req, res) => {
  const id = req.params.id;
  deleteUserById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
