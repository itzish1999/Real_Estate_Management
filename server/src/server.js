const express = require("express");

const app = express();

const PORT = 1000;

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`App Is Listening on PORT ${PORT}`)
})