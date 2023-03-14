const express = require("express");
const uuid = require("uuid");
const app = express();
const cors = require("cors")
const videoRoute = require("./routes/videoRoute");

require("dotenv").config()
const port = process.env.PORT

// middleware parses request body as JSON, Need this for access to req.body for posts
app.use(express.json()); 
app.use(express.static('public'));
app.use(cors())


app.use('/', videoRoute);



app.listen(port, () => {
  console.log(`Express demo listening on port ${port}`);
});


