const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//mongoose.connect(<mongodb_atlas link>, {useNewUrlParser: true});

// const <SchemaName> = {
// };

app.get("/", function(req, res) {
  res.render("index");
});

// app.get("/:customName", (req, res) => {
//   log(req.params.customName);
// })
//
// app.post("/", function(req, res){
//   console.log(req.body);
// });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
