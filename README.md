# day01-node-basics

A small Node.js script that prints information about the running Node process and any command-line arguments you pass to it. It's Day 1 of my backend learning plan.

## Requirements

- Node.js 24 LTS or newer (check with `node -v`)
- npm, which comes with Node

## Install

```bash
npm install
```

This installs `chalk` (colored terminal output) and `prettier` (code formatter, dev only).

## Run

| Command | What it does |
|---|---|
| `npm start` | Runs `src/index.js` once |
| `npm start -- hello 123` | Runs it with arguments. Everything after `--` is passed to the script. |
| `npm run dev` | Watch mode: reruns automatically every time you save a file |

## Output

It prints the Node version (in green), your operating system, the number of CPU cores, the full `process.argv` array, and just the arguments you passed:

```text
Node version: v24.22.1
Platform: darwin
CPU cores: 10
Arguments: [ '/path/to/node', '/path/to/src/index.js', 'hello', '123' ]
Your args: [ 'hello', '123' ]
```
