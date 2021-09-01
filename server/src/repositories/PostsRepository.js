const Post = require("../models/Post");
const fileData = require("../data/POSTS.json");
const DbStorage = require("../data/db/index");

class PostsRepository {
  // data = [];

  constructor() {
    this.data = fileData;
    // this.data = new DbStorage("posts").getAll();
    // console.log("constructor", this.data);
  }

  async getAllPosts() {
    // // console.log(this.data);
    // for (let i in this.data) {
    //   console.log(this.data);
    //   return this.data;
    // }
    // console.log("constructor", this.data);
    const recievedData = await this.data;
    return await recievedData.map((data) => {
      // console.log(this.data);
      const postModel = new Post(data);
      return postModel.getData();
    });
  }

  getUserPosts(username) {
    console.log(username);
    return this.data.filter((post) => post.created_by === username);
  }

  getSinglePost(id) {
    let found;
    this.data.map((item) => (item.id == id ? (found = item) : "not found"));
    return found;
  }

  addPost(data) {
    // model used to validate and parse data

    const postModel = new Post(data);
    const dataToStore = postModel.getData();
    const id = Date.now();
    const storedData = Object.assign({}, dataToStore, { id });
    this.data.push(storedData);
    return postModel.getData();
  }

  deletePost(id) {
    let found;
    this.data.map((item) => (item.id == id ? (found = item) : "not found"));
    return this.data.splice(this.data.indexOf(found), 1);
  }
}

module.exports = new PostsRepository();
