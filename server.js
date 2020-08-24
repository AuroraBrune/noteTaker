const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');


const app = express();

// parse application/urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// require('./app/routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

const PORT = process.envPORT || 8080;



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
