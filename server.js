const express = require('express');
const path = require('path');
require('./db/connection');
// const fallback = require('express-history-api-fallback');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "client", "public")

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicPath));
// app.use(fallback('index.html', { root: publicPath }))

app.use(routes);

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});