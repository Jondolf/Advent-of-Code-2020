import { readFileSync } from "fs";

const input = readFileSync('day-03/day03.txt', 'utf8');

export function solveDay3Part1(): number {
  const hitTrees = getHitTreesOnSlope(3, 1);
  return hitTrees;
}

export function solveDay3Part2(): number {
  const [slope1, slope2, slope3, slope4, slope5] = [getHitTreesOnSlope(1, 1), getHitTreesOnSlope(3, 1), getHitTreesOnSlope(5, 1), getHitTreesOnSlope(7, 1), getHitTreesOnSlope(1, 2)];
  const hitTreesMultiplied = slope1 * slope2 * slope3 * slope4 * slope5;
  return hitTreesMultiplied;
}

function getHitTreesOnSlope(horizontalSpeed: number, verticalSpeed: number): number {
  const rows = input.split('\n');

  let xCoord = 0;
  let hitTrees = 0;

  for (let i = 0; i < rows.length; i += verticalSpeed) {
    const row = rows[i];
    if (row[xCoord] === '#') {
      hitTrees++;
    }
    xCoord = (xCoord + horizontalSpeed) % (row.length - 1);
  }

  return hitTrees;
}

console.log(`Day 3 part 1 solution: ${solveDay3Part1()}`);
console.log(`Day 3 part 2 solution: ${solveDay3Part2()}\n`);
