const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const { env } = require('./.env');

const app = express();

const host = env.HOSTNAME;
const port = env.PORT;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public/')));

app.listen(port, () => {
  console.log(`listening at https://${host}:${port}`);
});
