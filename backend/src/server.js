const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const path = require("path");

const app = express();

mongoose.connect(  
  "mongodb+srv://robertafurlan:rafaella@02@omnistack-11bom.mongodb.net/Bexstech?retryWrites=true&w=majority",
  
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
///app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3333);
