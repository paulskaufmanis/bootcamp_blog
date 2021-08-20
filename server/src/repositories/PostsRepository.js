const Post = require("../models/Post");
const receivedData = require("../data/POSTS.json");

class PostsRepository {
  data = [];

  constructor() {
    receivedData.forEach((item) => {
      this.data.push(item);
    });
  }

  getAllPosts() {
    return this.data.map((data) => {
      const postModel = new Post(data);
      return postModel.getData();
    });
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
