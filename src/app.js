const express = require('express');
const app = express();

app.get("/", (_req, res) => {
    res.status(200).send("Welcome to home dashboard")
})
app.get("/testNode", (_req, res) => {
    res.status(200).send("Yes the TestNode endpoint worked")
})
app.get("/contact", (_req, res) => {
    res.status(200).send("Welcome to Contact dashboard")
})
module.exports = app;