// external imports
const jwt = require("jsonwebtoken");

function generateToken(userId, secretKey) {
  // Payload to be included in the token
  const payload = {
    userId: userId,
  };

  // Options for token generation
  const options = {
    expiresIn: "1h", // Token expiration time
  };

  // Generate the token
  const token = jwt.sign(payload, secretKey, options);

  return token;
}

module.exports = generateToken;
