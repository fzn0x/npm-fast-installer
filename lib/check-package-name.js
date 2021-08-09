const validateNpmPackage = require("./validate-package-name");

module.exports = (name) => {
  const checkPackageName = validateNpmPackage(name);

  if (!checkPackageName.valid) {
    checkPackageName.errors.forEach((value) => {
      console.log("\u001b[91m", `dependencies [${name}]`, value, "\u001b[39m");
    });
    checkPackageName.warnings.forEach((value) => {
      console.log("\u001b[93m", `dependencies [${name}]`, value, "\u001b[39m");
    });
    process.exit(1);
  }
};
