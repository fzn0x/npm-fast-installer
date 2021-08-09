module.exports = {
  lines: [],
  currentLine: 0,
  log: function (msg, appendToCurrentLine) {
    if (!appendToCurrentLine) this.currentLine++;

    if (appendToCurrentLine && this.lines[this.currentLine]) {
      this.lines[this.currentLine] += msg;
    } else {
      this.lines[this.currentLine] = msg;
    }

    console.clear();

    this.lines.forEach(function (line) {
      console.log("\u001b[92m", line, "\u001b[39m");
    });
  },
  clear: function () {
    console.clear();
    this.currentLine = 0;
  },
};
