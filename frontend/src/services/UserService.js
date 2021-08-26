const url = "http://localhost:3300/api/users-management/users/";

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

  static loginUser(user) {
    fetch(`${url}login`, {
      method: "POST",
      headers: {
        // check if token, pass to header
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      //   .then(console.log(JSON.stringify(user)))
      .then((res) => res)

      .then((data) => {
        console.log(data.body, data.headers);
        // data is token, store token to local storage
      });
  }

  static deleteUser(id, method = "DELETE") {
    fetch(`${url}${id}`, { method }).then((response) => console.log(response));
  }
}

export default UserService;
