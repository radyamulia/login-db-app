// import connection
import db from "../config/database.js";

// Get All Users
export const getUsers = (result) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Get Single User using email
export const getUserByEmail = (email, result) => {
  db.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// Insert User to Database
export const insertUser = (data, result) => {
  db.query("INSERT INTO user SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Delete User to Database
export const deleteUserById = (id, result) => {
  db.query("DELETE FROM user WHERE user_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
