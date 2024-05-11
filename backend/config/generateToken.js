const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "aradhay", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
