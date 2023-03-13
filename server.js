const express = require("express");
// const vidDetails = require("./data/video-details.json");
const vidList = require("./data/videos.json");
const uuid = require("uuid");
const app = express();
const port = 8080;

app.use(express.json()); // middleware parses request body as JSON, Need this for access to req.body for posts

app.post("/", (request, response) => {
  
    const body = request.body;
    const title = body.title;
    const channel = body.channel;
    const image = body.image;

    const newVid = {
    id: uuid.v4(),
    title,
    channel,
    image,
  }

  vidList.push(newVid)
  response.status(201).json(jokesData);
});

app.listen(port, () => {
    console.log(`Express demo listening on port ${port}`);
  });