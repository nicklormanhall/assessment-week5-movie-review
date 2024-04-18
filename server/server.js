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
  const movies = db.prepare("SELECT * FROM movies").all();
  response.json(movies);
});

app.post("/movieadd", function (request, response) {
  const { name, genre, imageUrl, summary, rating } = request.body;
  const ratingpercent = rating + "%";
  const insertStatement = db.prepare(
    "INSERT INTO movies (name, genre, imageUrl, summary, rating) VALUES (?, ?, ?, ?, ?)"
  );
  insertStatement.run(name, genre, imageUrl, summary, ratingpercent);
  response.json("success");
  console.log("success");
});

app.get("/moviesbyrating", function (request, response) {
  // here we use .all instead of .run because we aren't INSERTing, but selecting. So we want to see ALL the results
  const movies = db.prepare("SELECT * FROM movies ORDER BY rating DESC").all();
  response.json(movies);
});

app.get("/genre", function (request, response) {
  // here we use .all instead of .run because we aren't INSERTing, but selecting. So we want to see ALL the results
  const movies = db.prepare("SELECT DISTINCT genre FROM movies;").all();
  response.json(movies);
});

app.delete("/moviedelete/:id", function (request, response) {
  const movieId = request.params.id;
  const deleteMovie = db.prepare("DELETE FROM movies WHERE id = ?");
  deleteMovie.run(movieId);
  response.json("");
});

//starting out server
app.listen(8080, function () {
  console.log("App is running on port 8080");
});
