const validate = require("validate-npm-package-name");

module.exports = function (name) {
  const valid = validate(name);

  return {
    valid: valid.validForNewPackages && valid.validForOldPackages,
    errors: valid.errors || [],
    warnings: valid.warnings || [],
  };
};
