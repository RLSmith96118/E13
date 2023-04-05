var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
   res.render("home");
});

router.get("/home", function (req, res) {
   res.render("home");
});

router.get("/about", function (req, res) {
   res.render("about");
});

router.get("/pollutant_glossary", function (req, res) {
   res.render("pollutant_glossary");
});

module.exports = router;