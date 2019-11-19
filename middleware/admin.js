const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "no token" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    if (decoded.user.id === config.get("adminId")) {
      req.user = decoded.user;
      next();
    } else {
      res.status(401).json({ msg: "Invalid credentials" });
    }
  } catch (error) {
    res.status(401).json({ msg: "Not authorized" });
  }
};
