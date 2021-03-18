const express = require('express');
const app = express();
require("./models/dbConfig");
const postR = require('./routes/postController')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');


mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());
app.use(cors());
app.use('/posts',postR);
app.listen("5500",()=> console.log("Serveur démarré : 5500"));
