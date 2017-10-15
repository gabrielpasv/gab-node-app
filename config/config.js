require('dotenv').config(); // magic


module.exports = {
  "development" : {
    "database" : process.env.MYSQL_DATABASE,
    "username" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASSWORD,
    "host" : process.env.APP_DB_HOST,
    "dialect" : "mysql"
  },

  "test" : {
    "database" : process.env.MYSQL_DATABASE,
    "username" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASSWORD,
    "host" : process.env.APP_DB_HOST,
    "dialect" : "mysql"
  },

  "production" : {
    "database" : process.env.MYSQL_DATABASE,
    "username" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASSWORD,
    "host" : process.env.APP_DB_HOST,
    "dialect" : "mysql"
  }
}
