#!/usr/bin/env node

const yaml = require("js-yaml");
const fs = require("fs");

const schema = require("../lib/schema");
const initFile = require("../lib/init-file");
const {
  installDependency,
  installDevDependency,
  installGlobalDependency,
} = require("../lib/install");
const virtualConsole = require("../lib/virtual-console");

const args = process.argv;

// Get npm-fast-installer configuration, or throw exception on error
(async () => {
  try {
    if (typeof args[2] === "undefined") {
      throw `npx npm-fast-installer <configuration file path> , configuration file path cannot be undefined.`;
    } else if (args[2] === "init") {
      if (typeof args[3] === "undefined") {
        throw `npx npm-fast-installer init <configuration filename> , configuration filename cannot be undefined.`;
      }

      return initFile(args[3]);
    }

    const doc = yaml.load(fs.readFileSync(args[2], "utf8"));
    const values = await schema.validateAsync(doc);

    virtualConsole.log("fncolon/npm-fast-installer - installing dependencies");

    const loadIndicatorInterval = setInterval(function () {
      virtualConsole.log(".", true); // <- Append.
    }, 1000);

    for (dependency in values) {
      if (
        dependency.toString().toLowerCase() == "dependencies" &&
        values[dependency]
      ) {
        installDependency(values[dependency]);
      } else if (
        dependency.toString().toLowerCase() == "devdependencies" &&
        values[dependency]
      ) {
        installDevDependency(values[dependency]);
      } else if (
        dependency.toString().toLowerCase() == "global" &&
        values[dependency]
      ) {
        installGlobalDependency(values[dependency]);
      }
    }

    setTimeout(function () {
      clearInterval(loadIndicatorInterval);
    }, 2000);
  } catch (e) {
    console.error("\u001b[91m", e);
  }
})();
