const express = require("express");
// const vidDetails = require("./data/video-details.json");
const vidData = require("./data/video-details.json");
const uuid = require("uuid");
const app = express();
const port = 8080;

//c05b9a93-8682-4ab6-aff2-92ebb4bbfc14


app.use(express.json()); // middleware parses request body as JSON, Need this for access to req.body for posts

app.get("/", (req, res) => {
  res.json(vidData.map((element)=>element.id))
});

app.get("/:id", (req, res) => {
  const vidID = req.params.id;
  const vid = vidData.find((vid) => vid.id === vidID);

  if (vid) {
    res.json(vid);
  } else {
    res.status(404).send("We can't find the video");
  }

});


app.listen(port, () => {
  console.log(`Express demo listening on port ${port}`);
});





//   const body = request.body;
//   const title = body.title;
//   const channel = body.channel;
//   const image = body.image;

//   const newVid = {
//   id: uuid.v4(),
//   title,
//   channel,
//   image,
// }

// vid.push(newVid)
// response.status(201).json(vid);