const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { insertTodoDb } = require('./models/todoModel');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const insertResult = await insertTodoDb(req.body);
    return res.send(insertResult);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.use('/', router);

app.listen(port, () => console.log(`Server is runnign on port ${port}`));
