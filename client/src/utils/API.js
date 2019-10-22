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
  updateMember: function (id, memberData) {
    return axios.put("/api/member/" + id, memberData);
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
  updateFamily: function (id, memberData) {
    return axios.put("/api/family/" + id, memberData);
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
  updateActivity: function (id, memberData) {
    return axios.put("/api/activity/" + id, memberData);
  },
  // Saves a activity to the database
  addActivity: function (memberData) {
    return axios.post("/api/activity", memberData);
  },

  // get the activities associated with a child for specified date.  Sending in an object {"MemberId":"3", "activitydate":"2019-10-09"}
  findActivityByChildId: function (id) {
    return axios.get("/api/activity/child/" + JSON.stringify(id));
  },
  // get the activities associated with a child for specified date
  findMembersByFamily: function (id) {
    return axios.get("/api/member/family/" + id);
  },
  //this will check the login credentials.  Sending in an object
  validateUser: function (id) {
    //alert("validate API "+JSON.stringify(id));

    return axios.get("/api/member/validate/" + JSON.stringify(id));
  },
  //this will upload a file.  Sending in an object
  uploadFile: function (fileInfo) {
    //alert("validate API "+JSON.stringify(id));

    return axios.post("/api/utils/upload", fileInfo);
  },
  //this will email a file.  Sending in an object
  sendEmail: function (emailInfo) {
    //alert("validate API "+JSON.stringify(id));

    return axios.post("/api/utils/email", emailInfo);
  },
  //this will return the family name and text/email addresses for sending messages.
  findMembersMessaging: function () {
    return axios.get("/api/member/messaging");
  },
};
