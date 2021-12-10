let express = require('express');
let db = require('./bdd/bdd');

let app = express();

app.listen(process.env.PORT || 8080);
console.log("L'application tourne.");