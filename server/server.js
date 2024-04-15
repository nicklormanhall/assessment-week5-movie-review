import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//connecting to database file
import Database from "better-sqlite3";
const db = new Database("database.db"); // go and get the existing db file

//root endpoint
app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude!");
});

app.get("/movies", function (request, response) {
  // here we use .all instead of .run because we aren't INSERTing, but selecting. So we want to see ALL the results
  const movies = db.prepare("SELECT * FROM games").all();
  response.json(movies);
});

//starting out server
app.listen(8080, function () {
  console.log("App is running on port 8080");
});
