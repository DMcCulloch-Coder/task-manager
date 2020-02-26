const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"))
})

app.listen(PORT, () => {
    console.log(`Now Listening on port ${PORT}`)
})
