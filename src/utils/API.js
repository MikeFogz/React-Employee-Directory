import axios from "axios";

// Exporting an object containing method for accessing the Random User API

export default {
  getRandomEmps: function() {
    return axios.get("https://randomuser.me/api/?results=10");
  }
};