const util = require("util");
const exec = util.promisify(require("child_process").exec);
const validateNpmPackage = require("../lib/validate-package-name");

module.exports.installDependency = (dependencies) => {
  let dependencyEntry = Object.entries(dependencies);

  console.error("\u001b[91m");

  dependencyEntry.forEach(async (value) => {
    var checkPackageName = validateNpmPackage(value[0]);

    if (!checkPackageName.valid) {
      checkPackageName.errors.forEach((value) => {
        console.log("\u001b[91m", "dependencies", value);
      });
      checkPackageName.warnings.forEach((value) => {
        console.log("\u001b[93m", "dependencies", value);
      });
      process.exit(1);
    }

    if (value[1] === "latest") {
      const { stdout, stderr } = await exec(`npm i ${value[0]}`);
      console.log("\u001b[96m", stdout);
      console.error("\u001b[91m", stderr);
    } else {
      const { stdout, stderr } = await exec(`npm i ${value[0]}@${value[1]}`);
      console.log("\u001b[96m", stdout);
      console.error("\u001b[91m", stderr);
    }
  });
};

module.exports.installDevDependency = (devDependencies) => {
  let devDependencyEntry = Object.entries(devDependencies);

  console.error("\u001b[91m");

  devDependencyEntry.forEach(async (value) => {
    var checkPackageName = validateNpmPackage(value[0]);

    if (!checkPackageName.valid) {
      checkPackageName.errors.forEach((value) => {
        console.log("\u001b[91m", "devdependencies", value);
      });
      checkPackageName.warnings.forEach((value) => {
        console.log("\u001b[93m", "devdependencies", value);
      });
      process.exit(1);
    }

    if (value[1] === "latest") {
      const { stdout, stderr } = await exec(`npm i -D ${value[0]}`);
      console.log("\u001b[96m", stdout);
      console.error("\u001b[91m", stderr);
    } else {
      const { stdout, stderr } = await exec(`npm i -D ${value[0]}@${value[1]}`);
      console.log("\u001b[96m", stdout);
      console.error("\u001b[91m", stderr);
    }
  });
};

module.exports.installGlobalDependency = (globalDependencies) => {
  let globalDependencyEntry = Object.entries(globalDependencies);

  console.error("\u001b[91m");

  globalDependencyEntry.forEach(async (value) => {
    if (value[1] === "latest") {
      const { stdout, stderr } = await exec(`npm i -g ${value[0]}`);
      console.log("\u001b[96m", stdout);
      console.error("\u001b[91m", stderr);
    } else {
      const { stdout, stderr } = await exec(`npm i -g ${value[0]}@${value[1]}`);
      console.log("\u001b[96m", stdout);
      console.error("\u001b[91m", stderr);
    }
  });
};
