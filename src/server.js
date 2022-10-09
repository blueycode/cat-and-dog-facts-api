const express = require("express");
const catRoutes = require("./routes/cat");
const dogRoutes = require("./routes/dog");

const app = express();

app.use(catRoutes);
app.use(dogRoutes);

app.listen(process.env.PORT || 8080);