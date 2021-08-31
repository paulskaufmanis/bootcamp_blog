const url = "http://localhost:3400/api/users-management/users/";

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
    // const token = window.localStorage.token;
    // console.log(token, "aha");
    // const token = response.localStorage.token;
    // console.log(req.headers.authorization);
    axios
      .post(`${url}${"login"}`, {
        username: user.username,
        password: user.password,
        // headers: {
        //   authorization: `Bearer ` + localStorage.token,
        // },
      })
      .then((response) => {
        console.log(response.data);
        this.$store.dispatch("setUser");
        // response.data;
        // localStorage.setItem("token", response.data.accessToken);
      });
    // console.log(localStorage.token);
  }

  static deleteUser(id, method = "DELETE") {
    fetch(`${url}${id}`, { method }).then((response) => console.log(response));
  }
}

export default UserService;
