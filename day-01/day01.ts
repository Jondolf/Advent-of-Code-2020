import { readFileSync } from "fs";

const input = readFileSync('day-01/day01.txt', 'utf8');

export function solveDay1Part1(): number {
  const numberArrInput = input.split('\n').map(entry => +entry).sort();
  const entriesWithSum2020 = findSubSumOf2Numbers(numberArrInput, 2020);
  const output = entriesWithSum2020[0] * entriesWithSum2020[1];
  return output;
}

export function solveDay1Part2(): number {
  const numberArrInput = input.split('\n').map(entry => +entry);
  const entriesWithSum2020 = findSubSumOf3Numbers(numberArrInput, 2020);
  const output = entriesWithSum2020[0] * entriesWithSum2020[1] * entriesWithSum2020[2];
  return output;
}

function findSubSumOf2Numbers(arr: number[], targetNum: number): number[] {
  for (let num1 of arr) {
    for (let num2 of arr) {
      const numbersInArrWithTargetSum: number[] = num1 + num2 === targetNum ? [num1, num2] : [];
      if (numbersInArrWithTargetSum.length >= 1) {
        return numbersInArrWithTargetSum;
      }
    }
  }
  return [];
}

function findSubSumOf3Numbers(arr: number[], targetNum: number): number[] {
  for (let num1 of arr) {
    for (let num2 of arr) {
      for (let num3 of arr) {
        const numbersInArrWithTargetSum: number[] = num1 + num2 + num3 === targetNum ? [num1, num2, num3] : [];
        if (numbersInArrWithTargetSum.length >= 1) {
          return numbersInArrWithTargetSum;
        }
      }
    }
  }
  return [];
}

console.log(`Day 1 part 1 solution: ${solveDay1Part1()}`);
console.log(`Day 1 part 2 solution: ${solveDay1Part2()}\n`);
