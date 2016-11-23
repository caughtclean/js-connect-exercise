const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: {
    "user": "mdzjkkkbudcexz",
    "password": "erfMVyA9Xz71QqsgB-QQm3uMxV",
    "database": "de8v7q3jus4nir",
    "host": "ec2-54-243-202-84.compute-1.amazonaws.com",
    "port": 5432,
    "ssl": true
  }


});

var args = process.argv


knex('famous_people').insert({first_name: 'args[2]'}, {last_name: 'args[3]'}, {birthdate: 'args[4]'}).
asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log("rows")

});
