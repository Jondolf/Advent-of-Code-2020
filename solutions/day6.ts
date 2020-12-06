import { readFileSync } from "fs";
import { removeDuplicatesFromString } from "../helpers/removeDuplicatesFromString";

const input = readFileSync('inputs/day6.txt', 'utf8');

export function solveDay6Part1() {
  const groups = input.split(/\n\s*\n/);
  let amountOfYesAnswersFromGroups = 0;
  for (let group of groups) {
    const allAnswersSorted = group.trim().split('').sort().join('');
    const answersWithoutDuplicates = removeDuplicatesFromString(allAnswersSorted);
    amountOfYesAnswersFromGroups += answersWithoutDuplicates.length;
  }
  return amountOfYesAnswersFromGroups;
}

export function solveDay6Part2() {
  const groups = input.split(/\n\s*\n/);
  let amountOfYesAnswersFromGroups = 0;
  for (let group of groups) {
    const people = group.split('\n');
    const allQuestionsSorted = group.trim().split('').sort().join('');
    const questionsWithoutDuplicates = removeDuplicatesFromString(allQuestionsSorted);
    const sharedQuestions = questionsWithoutDuplicates.split('').filter(question => people.every(val => val.includes(question)));
    amountOfYesAnswersFromGroups += sharedQuestions.length;
  }
  return amountOfYesAnswersFromGroups;
}

console.log(`Day 6 part 1 solution: ${solveDay6Part1()}`);
console.log(`Day 6 part 2 solution: ${solveDay6Part2()}\n`);
