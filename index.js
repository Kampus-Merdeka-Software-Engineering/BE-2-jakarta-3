// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const apiRouter = require('./routes/api');
const config = require('./config/config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRouter);

const port = config.server.port || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
