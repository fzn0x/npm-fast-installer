const validateNpmPackage = require("./validate-package-name");

module.exports = (name) => {
  const checkPackageName = validateNpmPackage(name);

  if (!checkPackageName.valid) {
    checkPackageName.errors.forEach((value) => {
      console.log("\u001b[91m", "dependencies", value);
    });
    checkPackageName.warnings.forEach((value) => {
      console.log("\u001b[93m", "dependencies", value);
    });
    process.exit(1);
  }
};
