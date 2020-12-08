# Advent of Code 2020

Here you can find my solutions for the [Advent of Code 2020](https://adventofcode.com/2020).

I wrote all of my solutions in [TypeScript](https://www.typescriptlang.org/). My main goal was to just complete as many puzzles as I can in a fairly clean way.

## File structure

Each day has its own folder. Each folder has a solution file `dayXX.ts`, an input file `dayXX.txt` and an instruction file `README.md`.

The [/helpers](./helpers) folder has reusable helper functions in `.ts` files.

## Running code

The solutions can be run with `ts-node day-XX/dayXX.ts`, if ts-node is installed globally. Alternatively, you can install ts-node locally with `npm install` and run the solutions with `npx ts-node day-XX/dayXX.ts`.

`npm run start` can be used to run all solutions at once.
