const fs = require('fs');

module.exports = {
    "development": {
      "username": "root",
      "password": process.env.DB_PASSWORD,
      "database": "staycare",
      "host": "public-scratch.cvwwn9esnrpn.us-east-1.rds.amazonaws.com",
      "dialect": "mysql",
      "port": 3306
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }