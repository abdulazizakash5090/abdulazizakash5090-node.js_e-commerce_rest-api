const jwt = require("jsonwebtoken");

const generateRefreshTokon = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

module.exports = { generateRefreshTokon };