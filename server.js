//before just coding a bunch, we need to plan what we want our API to look like:
//res will be this is working
//sign in --> POST = success/fail
//register --> POST = user info to you
//profile/:userId --> GET = user
///image--> PUT //put, not post, bc we're updating their score count
//why are we sending the signin as a post since we arent' creating a new user?
//we don't want to send the pw as a query string, it would not be secure.
//by sending the signin in a post, we are sending it in the body, over HTTPS,
//thus making it secure from man in the middles.
//the above may change, but it's an idea of what to create.
//will be testing with post man.
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");

const app = express();
//add this UNDER THE APP
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "j@gmail.com",
      password: "cookies",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "122343",
      name: "Sally",
      email: "Sass@gmail.com",
      password: "caps",
      entries: 0,
      joined: new Date(),
    },
  ],
  login: [
    {
      id: "987",
      hash: "",
      email: "john@gmail.com",
    },
  ],
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req, res) => {
  // Load hash from your password DB.
  bcrypt.compare("bacon", hash, function (err, res) {
    // res == true
  });
  bcrypt.compare("veggies", hash, function (err, res) {
    // res = false
  });
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("Error logging in!");
  }
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  //   bcrypt.hash(password, null, null, function (err, hash) {
  //     // Store hash in your password DB.
  //     console.log(hash);
  //   });
  database.users.push({
    id: "122343",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length[-1]]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      res.json(user);
    }
  });
  if (!found) {
    res.status(404).json("User not found!");
  }
});

app.put("/image", (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(404).json("User not found!");
  }
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

//this had been in script.js. Just setting it here for now
// const fs = require("fs");
// const { inRange } = require("lodash");

// fs.readFile("./hello.txt", (err, data) => {
//   if (err) {
//     console.log("errrroooorrrr");
//   }
//   console.log("1", data.toString());
// });
// //must use toString to encode the information so that it will properly display
// //utf-8 is pretty standard
// //ascii is the pre-utf-8. do similar things.

// //when we run this, the below fil with run and console before the top one.
// //the below runs the file in sync. the above is async. So it runs second.
// //readFileSync, will pause the execution of our file, make the whole
// //program wait.
// //use readFile so that we don't block the execution.
// const file = fs.readFileSync("./hello.txt");
// console.log("2", file.toString());

// //we can append to our files too
// // fs.appendFile("./hello.txt", "I cant wait until my vacations!", (err) => {
// //   if (err) {
// //     console.log(err);
// //   }
// // });

// //now let's write to a file
// fs.writeFile("bye.txt", "sad to see you go!", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// //now let's do a delete
// fs.unlink("./bye.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("inception!");
// });
