const express = require("express");
const vidData = require("./data/video-details.json");
const uuid = require("uuid");
const app = express();
const port = 8080;
const cors = require("cors")

//c05b9a93-8682-4ab6-aff2-92ebb4bbfc14

// middleware parses request body as JSON, Need this for access to req.body for posts
app.use(express.json()); 
app.use(express.static('public'));
app.use(cors())

app.get("/", (req, res) => {
  res.send(vidData)
})

// create a GET method for the "/:id" URL that sends a JSON response with the video data
app.get("/:id", (req, res) => {
  const vidID = req.params.id;
  const vid = vidData.find((vid) => vid.id === vidID);

  if (vid) {
    res.json(vid);
  } else {
    res.status(404).send("We can't find the video");
  }
});


// app.post((req, res) => {

//   const body = req.body;
//   const title = body.title;
//   const channel = body.channel;
//   const image = body.image;

//   const newVid = {
//   id: uuid.v4(),
//   title,
//   channel,
//   image,
//   description,

// }

// vidData.push(newVid)
// res.status(201).json(vidData);

// });


app.listen(port, () => {
  console.log(`Express demo listening on port ${port}`);
});


