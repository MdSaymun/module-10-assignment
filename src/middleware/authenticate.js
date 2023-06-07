const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Authentication failure!" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Authentication failure!" });
    }

    // Token is valid, store the decoded payload in the request object
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failure!" });
  }
};

module.exports = authenticate;
