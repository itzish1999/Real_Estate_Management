const express = require("express");
const { PORT } = require("../config");
const properties = require("../properties.json")

const app = express();

app.get('/', (req, res) => {
    res.send(properties);
});

app.listen(PORT, () => {
    console.log(`App Is Listening on PORT ${PORT}`)
});