const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const mysql = require('mysql2/promise');
// const dbConfigs = require('./dbConfigs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => res.send('hello'));

app.listen(port, () => console.log(`Server is runnign on port ${port}`));
