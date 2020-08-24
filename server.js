const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

const PORT = process.envPORT || 8080;

const app = express();

//










app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
