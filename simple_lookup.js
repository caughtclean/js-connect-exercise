const pg = require("pg");
const settings = require("./settings"); // settings.json
var args = process.argv[2]
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query('SELECT first_name, last_name, birthdate FROM famous_people WHERE last_name = $1::text', [args], (err, result) => {
    console.log("Searching...")
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Found 1 person(s) by the name", args)
    console.log(result.rows[0].first_name,result.rows[0].last_name,result.rows[0].birthdate); //output: 1
    client.end();
  });
});