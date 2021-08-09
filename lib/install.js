const spawn = require("cross-spawn");
const checkPackageName = require("./check-package-name");

const COMMAND = "npm";

const getArguments = (array = []) => {
  return ["install", "--no-audit"].concat(array);
};

const npmInstall = () => {
  spawn(COMMAND, getArguments(), {
    stdio: "inherit",
  });
};

module.exports.installDependency = (dependencies) => {
  let dependencyEntry = Object.entries(dependencies);

  npmInstall();

  dependencyEntry.forEach(async (value) => {
    checkPackageName(value[0]);

    if (value[1] == "latest") {
      spawn(COMMAND, getArguments([value[0]]), {
        stdio: "inherit",
      });
    } else {
      spawn(COMMAND, getArguments([`${value[0]}@${value[1]}`]), {
        stdio: "inherit",
      });
    }
  });
};

module.exports.installDevDependency = (devDependencies) => {
  let devDependencyEntry = Object.entries(devDependencies);

  npmInstall();

  devDependencyEntry.forEach(async (value) => {
    checkPackageName(value[0]);

    if (value[1] == "latest") {
      spawn(COMMAND, getArguments(["-D", value[0]]), {
        stdio: "inherit",
      });
    } else {
      spawn(COMMAND, getArguments(["-D", `${value[0]}@${value[1]}`]), {
        stdio: "inherit",
      });
    }
  });
};

module.exports.installGlobalDependency = (globalDependencies) => {
  let globalDependencyEntry = Object.entries(globalDependencies);

  globalDependencyEntry.forEach(async (value) => {
    checkPackageName(value[0]);

    if (value[1] == "latest") {
      spawn(COMMAND, getArguments(["-g", value[0]]), {
        stdio: "inherit",
      });
    } else {
      spawn(COMMAND, getArguments(["-g", `${value[0]}@${value[1]}`]), {
        stdio: "inherit",
      });
    }
  });
};
