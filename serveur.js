let express = require('express');

let app = express();

app.listen(process.env.PORT || 8080);
console.log("L'application tourne.");