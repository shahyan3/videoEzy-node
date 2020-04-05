const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

const { Genre } = require("./models/genre");

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

// (async function fun() {
//   const gen = new Genre({
//     name: "Rommance",
//   });
//   await gen.save();

//   const gen1 = new Genre({
//     name: "Thriller",
//   });
//   await gen1.save();

//   const gen2 = new Genre({
//     name: "Action",
//   });
//   await gen2.save();

//   const genres = await Genre.find();
//   console.log("Genres is db: ", genres);
// })();

module.exports = server;
