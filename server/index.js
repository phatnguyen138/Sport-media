// Set up packets
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonToken = require("jsonwebtoken");
const dotenv = require("dotenv");
const authRoute = require('./routes/authRoute');
const commentRoute = require('./routes/comments');
const likeRoute = require('./routes/likes');
const postRoute = require('./routes/posts');

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// Set up routes
app.use('/api/auth',authRoute);
app.use('/api/comments',commentRoute);
app.use('/api/likes',likeRoute);
app.use('/api/posts',postRoute);

// Set up port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
