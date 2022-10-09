const express = require("express");
const catRoutes = require("./routes/cat");

const app = express();

app.use(catRoutes);

app.listen(process.env.PORT || 8080);