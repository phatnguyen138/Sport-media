// Set up packets
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonToken = require("jsonwebtoken");
const dotenv = require("dotenv")

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// Set up port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
