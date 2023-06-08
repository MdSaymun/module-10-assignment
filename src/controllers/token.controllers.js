// internal imports
const generateToken = require("../utility/generateToken");

const TokenIssue = (req, res) => {
  try {
    const { userId } = req.body || {};
    const token = generateToken(userId, process.env.JWT_SECRET);
    res.send(token);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  TokenIssue,
};
