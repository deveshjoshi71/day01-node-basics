// src/index.js: DAY 1 PROJECT ENTRY POINT (ES modules)
// Run:  npm start                 -> runs "node src/index.js" (see "scripts" in package.json)
//       npm start -- hello 123    -> everything after `--` is passed to this script
//       npm run dev               -> same, but Node restarts on every file save (--watch)

// ---------- Imports (ES module syntax) ----------
// Allowed because package.json has "type": "module".
// Equivalent CommonJS: const os = require('node:os');
import os from "node:os"; // built-in module: always written with the 'node:' prefix
import chalk from "chalk"; // npm package from node_modules: no prefix (a runtime dependency)

// ---------- process: info about this running program ----------
// chalk.green(...) wraps the text in terminal color codes so it prints green.
console.log(chalk.green("Node version:", process.version));
console.log("Platform:", process.platform); // 'darwin' = macOS
console.log("CPU cores:", os.cpus().length);

// ---------- Command-line arguments ----------
// process.argv is an array of strings (Swift: CommandLine.arguments):
//   [0] path to the node program
//   [1] path to this script
//   [2...] the arguments YOU typed, always as strings ('123' is text, use Number('123') for math)
console.log("Arguments:", process.argv);

// Array destructuring: each comma skips one item, and ...rest collects whatever is left.
// Same result as: const userArgs = process.argv.slice(2);
const [, , ...userArgs] = process.argv;
console.log("Your args:", userArgs); // e.g. [ 'hello', '123' ]
