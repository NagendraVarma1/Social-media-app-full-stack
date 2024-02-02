const express = require('express');

const bodyParser = require('body-parser')

const sequelize = require('./util/database')

const cors = require('cors');

const app = express();

app.use(cors());

const postRoute = require('./routes/post')

app.use(bodyParser.json());

app.use('/post', postRoute)

sequelize.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => {
    console.log(err)
})
