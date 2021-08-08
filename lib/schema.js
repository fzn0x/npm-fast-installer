const Joi = require("joi");

// define schema for yaml
const schema = Joi.object({
  dependencies: Joi.optional(),
  devdepencies: Joi.optional(),
  devDependencies: Joi.optional(),
  global: Joi.optional(),
  Dependencies: Joi.optional(),
  DevDependencies: Joi.optional(),
  Global: Joi.optional(),
  DEPENDENCIES: Joi.optional(),
  DEVDEPENDENCIES: Joi.optional(),
  GLOBAL: Joi.optional(),
});

module.exports = schema;
