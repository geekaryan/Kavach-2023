const express = require("express");
const KavachController = require("./../controller/kavachController");

const router = express.Router();

router.route("/").get(KavachController.get).post(KavachController.create);

module.exports = router;
