const User = require("../models/User");
const data = require("../data/USERS.json");

class UsersRepository {
  constructor(user) {
    this.user = user;
  }

  getAllUsers() {}

  getUserById() {}

  createUser() {}

  deleteUser() {}
}

module.exports = UsersRepository;
