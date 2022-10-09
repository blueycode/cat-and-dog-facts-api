const express = require("express");
const Router = express.Router;

const dogFacts = require("../services/dog");

const dogRoutes = Router();

dogRoutes.get("/dog", (req, res) => {
    const randomFact = dogFacts[Math.floor(Math.random() * dogFacts.length)]

    return res.json({
        fact: randomFact,
        time: new Date()
    });
});

module.exports = dogRoutes;