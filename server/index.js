const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const app = express();
app.listen(3001);

const storage = multer.diskStorage({
  destination: "video/",
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.use(cors());
app.post("/convert", upload.single("video"), (req, res) => {
  const input = path.join(req.file.destination, req.file.filename);
  const format = req.body.format;
  const output = "output/" + Date.now() + format;
  console.log(input);
  const hbjs = require("handbrake-js");

  hbjs
    .spawn({ input: input, output: output })
    .on("error", (err) => {
      console.log("converting failed");
    })
    .on("progress", (progress) => {
      console.log(progress.percentComplete);
    });
});
