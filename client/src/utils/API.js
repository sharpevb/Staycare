import axios from "axios";

//this will load up all the routes to the server

export default {
  // Member Routes
  findMembers: function () {
    return axios.get("/api/member");
  },
  // Gets the member with the given id
  findMemberById: function (id) {
    return axios.get("/api/member/" + id);
  },
  // Deletes the member with the given id
  deleteMember: function (id) {
    return axios.delete("/api/member/" + id);
  },
  // Update the member with the given id
  updateMember: function (id) {
    return axios.put("/api/member/" + id);
  },
  // Saves a member to the database
  addMember: function (memberData) {
    return axios.post("/api/member", memberData);
  },
  // Family Routes
  findFamily: function () {
    return axios.get("/api/family");
  },
  // Gets the family with the given id
  findFamilyById: function (id) {
    return axios.get("/api/family/" + id);
  },
  // Deletes the family with the given id
  deleteFamily: function (id) {
    return axios.delete("/api/family/" + id);
  },
  // Update the family with the given id
  updateFamily: function (id) {
    return axios.put("/api/family/" + id);
  },
  // Saves a family to the database
  addFamily: function (memberData) {
    return axios.post("/api/family", memberData);
  },
  // Activities Routes
  findActivity: function () {
    return axios.get("/api/activity");
  },
  // Gets the activity with the given id
  findActivityById: function (id) {
    return axios.get("/api/activity/" + id);
  },
  // Deletes the activity with the given id
  deleteActivity: function (id) {
    return axios.delete("/api/activity/" + id);
  },
  // Update the activity with the given id
  updateActivity: function (id) {
    return axios.put("/api/activity/" + id);
  },
  // Saves a activity to the database
  addActivity: function (memberData) {
    return axios.post("/api/activity", memberData);
  }
};
