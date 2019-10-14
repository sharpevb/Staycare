// const db = require("../models");
// const passport = require("../config/passport");

// // Defining methods for the authController
// //creates object, routes direct the user to one of these functions
// // 

// module.exports = {
//   create: function(req, res) {
//     console.log("auth.create");
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password,
//       firstname: req.body.firstname,
//       lastname: req.body.lastname
//     })
//       .then(result => {
//         res.json({ success: true, msg: "Account Created", result: result });
//       })
//       .catch(err =>
//         res
//           .status(422)
//           .json({ success: false, msg: "Account not created", result: err })
//       );
//   },
//   login: function(req, res) {
//     console.log("auth.login");
//     db.User.findOne({
//       where: { email: req.body.email, password: req.body.password }
//     })
//       .then(results => {
//         res.json({ success: true, msg: "Account Created", result: results });
//       })
//       .catch(err =>
//         res
//           .status(422)
//           .json({ success: false, msg: "Account does not exist", result: err })
//       );
//   },
//   logout: function(req, res) {
//     console.log("auth.logout");
//     res.json({ success: true, msg: "Logged out" });
//   },
//   test: function(req, res) {
//     console.log("auth.test");
//     res.json({ success: true, msg: "Your test is successful" });
//   }
// };





// const db = require("../models");
// const passport = require("../config/passport");

// // Defining methods for the authController
// //creates object, routes direct the user to one of these functions
// // 

// module.exports = {
//   create: function(req, res) {
//     console.log("auth.create");
//     db.User.create({
//       email: req.body.email,
//       password: req.body.password,
//       firstname: req.body.firstname,
//       lastname: req.body.lastname
//     })
//       .then(result => {
//         res.json({ success: true, msg: "Account Created", result: result });
//       })
//       .catch(err =>
//         res
//           .status(422)
//           .json({ success: false, msg: "Account not created", result: err })
//       );
//   },
//   login: function(req, res) {
//     console.log("auth.login");
//     db.User.findOne({
//       where: { email: req.body.email, password: req.body.password }
//     })
//       .then(results => {
//         res.json({ success: true, msg: "Account Created", result: results });
//       })
//       .catch(err =>
//         res
//           .status(422)
//           .json({ success: false, msg: "Account does not exist", result: err })
//       );
//   },
//   logout: function(req, res) {
//     console.log("auth.logout");
//     res.json({ success: true, msg: "Logged out" });
//   },
//   test: function(req, res) {
//     console.log("auth.test");
//     res.json({ success: true, msg: "Your test is successful" });
//   }
// };


// module.exports = function(app) {
  //   app.post("/api/login", passport.authenticate("local"), function(req, res) {
  //     // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  //     // So we're sending the user back the route to the members page because the redirect will happen on the front end
  //     // They won't get this or even be able to access this page if they aren't authed
  //     res.json("/members");
  //   });
  
  //   app.post("/api/signup", function(req, res) {
  //     console.log(req.body);
  //     console.log("BYAAAAAH");
  //     db.User.create({
  //       email: req.body.email,
  //       password: req.body.password,
  //       firstname: req.body.firstname,
  //       lastname: req.body.lastname
  //     })
  //       .then(function() {
  //         res.redirect(307, "/api/login");
  //       })
  //       .catch(function(err) {
  //         console.log(err);
  //         res.json(err);
  //         // res.status(422).json(err.errors[0].message);
  //       });
  //   });
  
  //   // Route for logging user out
  //   app.get("/logout", function(req, res) {
  //     req.logout();
  //     res.redirect("/");
  //   });
  
  //   // Route for getting some data about our user to be used client side
  //   app.get("/api/user_data", function(req, res) {
  //     if (!req.user) {
  //       // The user is not logged in, send back an empty object
  //       res.json({});
  //     } else {
  //       // Otherwise send back the user's email and id
  //       // Sending back a password, even a hashed password, isn't a good idea
  //       res.json({
  //         email: req.user.email,
  //         id: req.user.id
  //       });
  //     }
  //   });
  // };
  