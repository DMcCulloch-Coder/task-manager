const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "client", "public")

const db = require('./models')
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicPath));

app.use(routes);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/client/public/index.html'))
// })

// require('./routes/api');

db.sequelize.sync().then(function () {
    console.log('working')
    app.listen(PORT, function () {
        console.log(`App listening on PORT ${PORT}`);
    });
});  