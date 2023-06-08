// external imports
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded payload to the request object
    req.user = decoded;

    // Call the next middleware function
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authenticate;
