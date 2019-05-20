// users.js
import axios from "axios";

class Users {
  static all() {
    return axios
      .get("http://jsonplaceholder.typicode.com/users/1")
      .then(resp => resp.data);
  }
}

module.exports = Users;
