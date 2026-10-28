import express from "express";

const app = express();

app.use(express.json());

let userArr = [];

const generateToken = () => {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let token = "";

  for (let i = 0; i < 32; i++) {
    // 0 - 36 options[35]
    token = token + options[Math.floor(Math.random() * options.length)];
  }

  return token;
};

const authMiddleWare = (req, res, next) => {
  const reqToken = req.headers["token"];

  const verifiedUser = userArr.find((user) => {
    if (reqToken === user.token) {
      return true;
    } else {
      return false;
    }
  });
  if (verifiedUser) {
    req.user = verifiedUser;
    next();
  } else {
    res.json({
      msg: "Invalid Token",
    });
  }
};

app.get("/", (req, res) => {
  res.json({
    userArr,
  });
});

app.post("/signup", (req, res) => {
  const { username, password, email } = req.body;

  userArr.push({
    username,
    password,
    email,
  });

  res.json({
    msg: "user Registered  successfully..",
    userArr,
  });
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  const foundUser = userArr.find((user) => {
    if (user.username === username && user.password === password) {
      return true;
    } else {
      return false;
    }
  });

  if (!foundUser) {
    res.json({
      msg: "Invalid User",
    });
  }

  const token = generateToken();

  foundUser.token = token;

  res.json({
    msg: "User is verified",
    token,
  });
});

app.use(authMiddleWare)

app.get("/courses",  (req, res) => {
  res.json({
    msg: "token Verified",
    course: {
      courseName: "Full Stack development",
      courseId: 22,
      Material: "MERN",
    },
  });
});

app.get("/me", (req, res) => {
  const { user } = req;

  res.json({
    msg: "User details",
    user,
  });
});

app.listen("8080", () => {
  console.log("Server is running on port 8080");
});
