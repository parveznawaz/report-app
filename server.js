const express = require("express");
const bodyParser = require("body-parser");
const serviceRequest = require("./routes/api/serviceRequest");
const app = express();
//const cors = require('cors');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use cors (Cross-origin resource sharing )
//app.use(cors());

//use routes
app.use("/api/service-request", serviceRequest);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

