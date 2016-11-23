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

var args = process.argv[2]


knex.select('first_name', 'last_name', 'birthdate').from('famous_people').where('last_name', args).asCallback(function(err, rows) {
  if (err) return console.error(err);
  console.log("Searching...")
  console.log("Found 1 person(s) by the name", args)
  console.log(rows[0].first_name, rows[0].last_name, rows[0].birthdate);

});
