const express = require("express");
const Router = express.Router;
const catFacts = require("../services/cat");

const catRoutes = Router();

catRoutes.get("/cat", (req, res) => {
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];

    return res.json({
        fact: randomFact,
        time: new Date(),
    });
});

module.exports = catRoutes;