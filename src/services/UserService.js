const url = "http://localhost:3400/api/users-management/users/";
// import axios from "axios";

class UserService {
  static getUsers(users, method = "GET") {
    fetch(url, { method })
      .then((res) => {
        return res.json();
      })
      .then((data) => data.map((item) => users.push(item)));
  }

  static getUserById(user, method = "GET") {
    fetch(`${url}${user.id}`, { method }).then((res) => {
      return res.json();
    });
  }

  static addUser(user) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(console.log(JSON.stringify(user)))
      .then((res) => res.json())
      .then((data) => console.log("User added!", data));
  }

  static async loginUser(user) {
    await fetch(`${url}login`, {
      method: "POST",
      headers: {
        // check if token, pass to header
        "Content-Type": "application/json",
      },
      // credentials: "include",
      body: JSON.stringify(user),
    })
      //   .then(console.log(JSON.stringify(user)))
      .then((res) => res)

      .then((data) => {
        console.log(JSON.stringify(data.headers), data.headers);
        // data is token, store token to local storage
      });
    console.log(localStorage.token);
  }

  //____________________________________________________________________________________________________

  // static async loginUser(user) {
  //   await fetch(`${url}login`, {
  //     method: "POST",
  //     headers: {
  //       "x-access-token": "adgdfg sdhgsdfg sdfg sdfg asgd",
  //       "Content-Type": "application/json",
  //       // check if token, pass to header
  //       // "Access-Control-Allow-Credentials": true,
  //       // authorization: "Bearer ",
  //     },
  //     // credentials: "include",
  //     body: JSON.stringify(user),
  //   })
  //     //   .then(console.log(JSON.stringify(user)))
  //     // .then((res) => res)
  //     .then((res) => {
  //       console.log(res.data);
  //       localStorage.setItem("token", res.token);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       // data is token, store token to local storage
  //     });
  // }

  //____________________________________________________________________________________________________

  static deleteUser(id, method = "DELETE") {
    fetch(`${url}${id}`, { method }).then((response) => console.log(response));
  }
}

export default UserService;
