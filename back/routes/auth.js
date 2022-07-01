const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const userToken = {
      name: req.body.username,
      password: req.body.password,
    };

    const token = await jwt.sign(userToken, process.env.TOKEN_SECRET);
    if (!token) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      jwt: token,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", tokenMiddleware, async (req, res) => {
  try {
    if (req.user != undefined) {
      const user = await User.findOne({ username: req.user.name });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      const validated = await bcrypt.compare(req.user.password, user.password);
      if (!validated) {
        return res.status(400).json({ message: "Invalid password" });
      }
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } else {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const validated = await bcrypt.compare(req.body.password, user.password);
      if (!validated) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const { password, ...others } = user._doc;
      res.status(200).json(others);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//JWT
function tokenMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    req.user = undefined;
    next();
    return;
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = router;
