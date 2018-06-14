var express = require("express");
var app = express();
let port = 3000;
// app.get("*", (req, res) => res.sendFile("index.html", { root: "./dist" }));

app.use("**", express.static("dist"));
app.listen(port, function() {
  console.log("Example app listening on port " + port);
});
