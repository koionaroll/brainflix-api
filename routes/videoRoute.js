const express = require("express");
const router = express.Router();
const vidData = require("../data/video-details.json");


router.get("/", (req, res) => {
    res.send(vidData)
  })
  
// create a GET method for the "/:id" URL that sends a JSON response with the video data
router.get("/:id", (req, res) => {
const vidID = req.params.id;
const vid = vidData.find((vid) => vid.id === vidID);

if (vid) {
    res.json(vid);
} else {
    res.status(404).send("We can't find the video");
}
});

module.exports = router;