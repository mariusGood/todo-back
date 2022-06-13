const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { insertTodoDb, getDataFromDb } = require('./models/todoModel');
const { validateTodo } = require('./models/validation');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const router = express.Router();

router.post('/', validateTodo, async (req, res) => {
  try {
    const insertResult = await insertTodoDb(req.body);
    if (insertResult.affectedRows) {
      return res.send({ msg: 'Success' });
    }
    return res.send(insertResult);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const foundData = await getDataFromDb();
    return res.json(foundData);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.use('/', router);

app.listen(port, () => console.log(`Server is runnign on port ${port}`));
