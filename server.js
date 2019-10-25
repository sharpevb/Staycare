require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();

//cors needed for file upload
const cors = require('cors');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Define API routes here

app.use(routes);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  console.log('sequelized')
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});

