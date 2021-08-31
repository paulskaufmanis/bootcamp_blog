const url = "http://localhost:3400/api/posts-management/posts/";

class PostService {
  static getPosts(posts, method = "GET") {
    fetch(url, { method })
      .then((res) => {
        return res.json();
      })
      .then((data) => data.map((item) => posts.push(item)));
  }

  static getUserPosts(posts, method = "GET") {
    fetch(`${url}${"my-posts"}`, { method })
      .then((res) => {
        return res.json();
      })
      .then((data) => data.map((item) => posts.push(item)));
  }

  static addPost(post) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then(console.log(JSON.stringify(post)))
      .then((res) => res.json())
      .then((data) => console.log("Success!", data));
    console.log();
  }

  static deletePost(id, method = "DELETE") {
    fetch(`${url}${id}`, { method }).then((response) => console.log(response));
  }
}

export default PostService;
