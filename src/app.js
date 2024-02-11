const express = require('express');
const app = express();

app.get("/testNode", (_req, res) => {
    res.status(200).send("Yes the TestNode endpoint worked")
})
app.get("/home", (_req, res) => {
    res.status(200).send("Welcome to home dashboard")
})
module.exports = app;