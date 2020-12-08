import { readFileSync } from "fs";

const input = readFileSync('inputs/day7.txt', 'utf8');

export function solveDay7Part1(): number {
  const rules = input.split('\n');
  return findBagsThatContainShinyGoldBags(rules).length;
}

export function solveDay7Part2(): number {
  const output = 0;
  return output;
}

function findBagsThatContainShinyGoldBags(rules: string[]): string[] {
  const bagColorsThatContainShinyGoldBags: string[] = [];
  for (const rule of rules) {
    const [colorStr, contentsStr] = rule.split(' bags contain ');
    const contentsArr = contentsStr.replace('no other bags.', '').replace(/bags/g, '').replace(/bag/g, '').replace('.', '').split(', ');
    for (const bagGroup of contentsArr) {
      const color = bagGroup.replace(/[0-9]/g, '').trim();
      if ((color === 'shiny gold' && !bagColorsThatContainShinyGoldBags.includes(colorStr)) || (bagColorsThatContainShinyGoldBags.includes(color) && !bagColorsThatContainShinyGoldBags.includes(colorStr))) {
        bagColorsThatContainShinyGoldBags.push(colorStr);
      }
    }
  }
  let areAllBagsFound = false;
  while (!areAllBagsFound) {
    let previousAmountOfBagsFound = bagColorsThatContainShinyGoldBags.length;
    for (const rule of rules) {
      const [colorStr, contentsStr] = rule.split(' bags contain ');
      const contentsArr = contentsStr.replace('no other bags.', '').replace(/bags/g, '').replace(/bag/g, '').replace('.', '').split(', ');
      for (const bagGroup of contentsArr) {
        const color = bagGroup.replace(/[0-9]/g, '').trim();
        if (bagColorsThatContainShinyGoldBags.includes(color) && !bagColorsThatContainShinyGoldBags.includes(colorStr)) {
          bagColorsThatContainShinyGoldBags.push(colorStr);
        }
      }
    }
    if (previousAmountOfBagsFound === bagColorsThatContainShinyGoldBags.length) {
      areAllBagsFound = true;
    }
  }
  return bagColorsThatContainShinyGoldBags;
}

console.log(`Day 7 part 1 solution: ${solveDay7Part1()}`);
console.log(`Day 7 part 2 solution: ${solveDay7Part2()}\n`);
