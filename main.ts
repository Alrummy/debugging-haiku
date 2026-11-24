const fs = require("fs");
const path = require("path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Joke: the "bug" that haiku is hunting isn't in the code at all — it's in the test suite, and the suite becomes the bug's home.
const text = "All the tests are green\nthe bug lived in the test suite\nI was the bug's home\n";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), text);
