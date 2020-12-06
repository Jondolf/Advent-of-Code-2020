import { readFileSync } from "fs";

const input = readFileSync('inputs/day5.txt', 'utf8');

export function solveDay5Part1(): number {
  const seats = input.split('\n');
  const seatIds = getSeatIds(seats).sort((a, b) => a - b);
  return seatIds[seatIds.length - 1];
}

export function solveDay5Part2(): number {
  const seats = input.split('\n');
  const seatIds = getSeatIds(seats).sort((a, b) => a - b);
  const ownSeat = findOwnSeat(seatIds);
  return ownSeat;
}

function getSeatIds(seats: string[]): number[] {
  const seatIds: number[] = [];
  for (let seat of seats) {
    let minRow = 0;
    let maxRow = 127;
    let minColumn = 0;
    let maxColumn = 7;
    for (let char of seat) {
      if (char === 'F') {
        maxRow = maxRow - Math.ceil((maxRow - minRow) / 2);
      } else if (char === 'B') {
        minRow = minRow + Math.ceil((maxRow - minRow) / 2);
      }
      if (char === 'L') {
        maxColumn = maxColumn - Math.ceil((maxColumn - minColumn) / 2);
      } else if (char === 'R') {
        minColumn = minColumn + Math.ceil((maxColumn - minColumn) / 2);
      }
    }
    const row = minRow;
    const column = minColumn;
    const id = row * 8 + column;
    seatIds.push(id);
  }
  return seatIds;
}

function findOwnSeat(seatIds: number[]): number {
  for (let i = 0; i < seatIds.length; i++) {
    const prev = i - 1;
    const next = i + 1;
    if (seatIds.includes(prev) && seatIds.includes(next) && !seatIds.includes(i)) {
      return i;
    }
  }
  return NaN;
}

console.log(`Day 5 part 1 solution: ${solveDay5Part1()}`);
console.log(`Day 5 part 2 solution: ${solveDay5Part2()}\n`);
