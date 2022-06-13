const Joi = require('joi');

async function validateTodo(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    const err = error.details.map((detail) => ({
      message: detail.message,
      field: detail.context.key,
    }));
    return res.status(400).send(err);
  }
}

module.exports = {
  validateTodo,
};
