const express = require("express");
const router = express.Router();
const vidData = require("../data/video-details.json");
const fs = require("fs");
const uuid = require("uuid");

function readUpload() {
  const vidFile = fs.readFileSync("./data/video-details.json");
  const vidInfo = JSON.parse(vidFile);
  return vidInfo;
}

function writeUpload(data) {
  const stringifiedData = JSON.stringify(data);
  fs.writeFileSync("./data/video-details.json", stringifiedData);
}

router.post("/", (req, res) => {
  const vid = readUpload();

  const body = req.body;
  const title = body.title;
  const description = body.description;

  const newVid = {
    id: uuid.v4(),
    title:title,
    channel: "New User",
    image: "//localhost:8080/assets/images/Upload-video-preview.jpg",
    description: description,
    views: "0",
    likes: "0",
    duration: "10:00",
    video: "",
    timestamp: Date.now(),
    comments: [],
  };

  vid.push(newVid);
  writeUpload(vid);
  res.status(201).send();
});

module.exports = router;
