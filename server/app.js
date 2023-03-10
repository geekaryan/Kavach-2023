const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const kavachRouter = require("./routes/kavachRouter");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/kavach/home", kavachRouter);

module.exports = app;
