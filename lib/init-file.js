const fs = require("fs");
const path = require("path");

module.exports = (name) => {
  fs.writeFile(
    path.resolve(__dirname, `../${name}.yml`),
    `
      \rdependencies:
      \r  # example
      \r  express: "latest"
      \rdevDependencies:
      \rglobal:
    `
      .replace(/\n/g, " ")
      .trim(),
    function (err) {
      if (err) return console.log(err);
      console.log(
        "\u001b[92m",
        `Configuration file named ${name}.yml created in your <root> directory.`
      );
    }
  );
};
