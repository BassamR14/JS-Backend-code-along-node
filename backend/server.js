// Sätta upp server

const express = require("express");
const app = express();

app.use(express.json());

// Datan vi arbetar med idag
let users = [
  { username: "Molly", age: 25 },
  { username: "David", age: 38 },
  { username: "Anna", age: 20 },
];

// Routes:

// start route "/", skicka Hello World
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Hämta och visa alla användare

app.get("/users", (req, res) => {
  res.send(`Here are all the users: ${users.map((user) => user.username)}`);
});

// Skicka och visa en användare

app.post("/user", (req, res) => {
  const { username } = req.body;
  res.send(`New user from Postman: ${username}`);
});

// Skapa en ny användare

app.post("/create", (req, res) => {
  const { username, age } = req.body;

  users.push({ username, age });

  res.send(
    `We have added a new user: ${username} in the list. ${users.map((user) => user.username)}`,
  );
});

// Updatera en befintlig användare

app.put("/update", (req, res) => {
  const { username, new_username } = req.body;

  const this_user = users.find((user) => user.username === username);

  this_user.username = new_username;

  res.send(
    `the username "${username}"  has changed to "${new_username}". New list: ${users.map((user) => user.username)}  `,
  );
});

// Ta bort en användare

app.delete("/delete", (req, res) => {
  const { username } = req.body;
  users = users.filter((user) => user.username !== username);

  res.send(
    `${username} is deleted. New List: ${users.map((user) => user.username)} `,
  );
});

// Starta server - console.log("port:  http://localhost:3000 ");

app.listen(3000, (res, req) => {
  console.log("port:  http://localhost:3000 ");
});
