const dotenv = require("dotenv");
const path = require("path");

const envPath = path.resolve(__dirname, "../../.env");
console.log("Resolved .env path:", envPath);

dotenv.config({ path: envPath });

console.log("MARVEL_PUBLIC_KEY:", process.env.MARVEL_PUBLIC_KEY);
console.log("MARVEL_PRIVATE_KEY:", process.env.MARVEL_PRIVATE_KEY);

module.exports = {
  PUBLIC_KEY: process.env.MARVEL_PUBLIC_KEY,
  PRIVATE_KEY: process.env.MARVEL_PRIVATE_KEY,
};
