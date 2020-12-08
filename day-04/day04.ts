import { readFileSync } from "fs";
import { convertStringToObject } from "../helpers/convertStringToObject";

const input = readFileSync('day-04/day04.txt', 'utf8');

export function solveDay4Part1(): number {
  const passports = input.split(/\n\s*\n/);
  const validPassports = [];
  for (let passport of passports) {
    const formattedPassport: any = convertStringToObject(passport);
    if (formattedPassport.byr && formattedPassport.iyr && formattedPassport.eyr && formattedPassport.hgt && formattedPassport.hcl && formattedPassport.ecl && formattedPassport.pid) {
      validPassports.push(formattedPassport);
    }
  }
  return validPassports.length;
}

export function solveDay4Part2(): number {
  const passports = input.split(/\n\s*\n/);
  const validPassports = [];
  for (let passport of passports) {
    const formattedPassport = convertStringToObject(passport);
    const isPassportValid = checkIfPassportIsValid(formattedPassport);
    if (isPassportValid) {
      validPassports.push(formattedPassport);
    }
  }
  return validPassports.length;
}

function checkIfPassportIsValid(passport: any): boolean {
  if (passport.byr && passport.iyr && passport.eyr && passport.hgt && passport.hcl && passport.ecl && passport.pid) {
    const isByrValid = (/^\d+$/g.test(passport.byr)) && +passport.byr >= 1920 && +passport.byr <= 2002;
    const isIyrValid = /^[0-9]{4}$/g.test(passport.iyr) && +passport.iyr >= 2010 && +passport.iyr <= 2020;
    const isEyrValid = /^[0-9]{4}$/g.test(passport.eyr) && +passport.eyr >= 2020 && +passport.eyr <= 2030;
    const isHgtValid = ((passport.hgt.replace(/[0-9]/g, '') === 'cm' && +passport.hgt.replace('cm', '') >= 150 && +passport.hgt.replace('cm', '') <= 193) || (passport.hgt.replace(/[0-9]/g, '') === 'in' && +passport.hgt.replace('in', '') >= 59 && +passport.hgt.replace('in', '') <= 76));
    const isHclValid = /^#[a-f0-9]{6}$/i.test(passport.hcl);
    const isEclValid = (passport.ecl === 'amb' || passport.ecl === 'blu' || passport.ecl === 'brn' || passport.ecl === 'gry' || passport.ecl === 'grn' || passport.ecl === 'hzl' || passport.ecl === 'oth');
    const isPidValid = /^[0-9]{9}$/g.test(passport.pid);
    if (isByrValid && isIyrValid && isEyrValid && isHgtValid && isHclValid && isEclValid && isPidValid) {
      return true;
    }
  }
  return false;
}

console.log(`Day 4 part 1 solution: ${solveDay4Part1()}`);
console.log(`Day 4 part 2 solution: ${solveDay4Part2()}\n`);
