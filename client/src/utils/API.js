import axios from "axios";

export default {
  // Gets all children
  findAll: function () {
    return axios.get("/api/child");
  },
  // Gets the child with the given id
  findById: function (id) {
    return axios.get("/api/child/" + id);
  },
  // Deletes the child with the given id
  deleteChild: function (id) {
    return axios.delete("/api/child/" + id);
  },
  // Deletes the child with the given id
  updateChild: function (id) {
    return axios.put("/api/child/" + id);
  },
  // Saves a child to the database
  addChild: function (childData) {
    return axios.post("/api/child", childData);
  }
};
