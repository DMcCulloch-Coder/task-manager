const express = require('express');
const path = require('path');
require('./db/connection');
const history = require('connect-history-api-fallback');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "client", "public");
const stateFileMiddleware = express.static(publicPath);

const routes = require('./routes');

app.use(express.json());
app.use(stateFileMiddleware);
app.use(history());
app.use(stateFileMiddleware);

app.use(routes);

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});