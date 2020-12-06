import { readFileSync } from "fs";

const input = readFileSync('inputs/day2.txt', 'utf8');

export function solveDay2Part1(): number {
  const rows = input.split('\n');
  let validPasswords: string[] = [];

  for (let row of rows) {
    const [leftSide, rightSide] = row.split(':');
    const [min, max, letter, password] =
      [
        +leftSide.split('-')[0],
        ...leftSide.split('-')[1].split(' '),
        rightSide.trim()
      ];
    const occurrencesOfLetter = password.split('').filter(char => char === letter).length;
    if (occurrencesOfLetter >= min && occurrencesOfLetter <= +max) {
      validPasswords.push(password);
    }
  }

  const amountOfValidPasswords = validPasswords.length;

  return amountOfValidPasswords;
}

export function solveDay2Part2(): number {
  const rows = input.split('\n');
  let validPasswords: string[] = [];

  for (let row of rows) {
    const [leftSide, rightSide] = [row.split(':')[0], row.split(':')[1]];
    const [firstIndex, secondIndex, letter, password] =
      [
        +leftSide.split('-')[0] - 1,
        +leftSide.split('-')[1].split(' ')[0] - 1,
        leftSide.split('-')[1].split(' ')[1],
        rightSide.trim()
      ];
    const passwordHasLettersAtIndeces = (password[firstIndex] === letter && password[secondIndex] !== letter) || (password[firstIndex] !== letter && password[secondIndex] === letter);
    if (passwordHasLettersAtIndeces) {
      validPasswords.push(password);
    }
  }

  const amountOfValidPasswords = validPasswords.length;

  return amountOfValidPasswords;
}

console.log(`Day 2 part 1 solution: ${solveDay2Part1()}`);
console.log(`Day 2 part 2 solution: ${solveDay2Part2()}\n`);
