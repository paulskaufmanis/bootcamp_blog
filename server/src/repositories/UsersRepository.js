const User = require("../models/User");
const receivedData = require("../data/Users.json");
const bcrypt = require("bcrypt");

class UsersRepository {
  data = [];

  constructor() {
    receivedData.forEach((item) => {
      this.data.push(item);
    });
  }

  getAllUsers() {
    return this.data.map((data) => {
      const userModel = new User(data);
      return userModel.getData();
    });
  }

  async findUser(data) {
    return this.data.find((user) => user.username === data);
  }

  getSingleUser(id) {
    let found;
    this.data.map((item) => (item.id == id ? (found = item) : "not found"));
    return found;
  }

  addUser(data) {
    // model used to validate and parse data

    const userModel = new User(data);
    const dataToStore = userModel.getData();
    const id = Date.now();
    const storedData = Object.assign({}, dataToStore, { id });
    this.data.push(storedData);
    return userModel.getData();
  }

  deleteUser(id) {
    let found;
    this.data.map((item) => (item.id == id ? (found = item) : "not found"));
    return this.data.splice(this.data.indexOf(found), 1);
  }
}

module.exports = new UsersRepository();
