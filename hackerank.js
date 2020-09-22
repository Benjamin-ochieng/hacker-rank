const stairCase = (n) => {
  const step = () => "\xa0".repeat(n - 1) + "#";
  const downStair = (stair) => stair.substring(1) + "#";
  const addStairs = (steps) => {
    let prevStep = step();
    while (n > 1) {
      steps = steps + "\n" + downStair(prevStep);
      prevStep = downStair(prevStep);
      n--;
    }
    return steps;
  };
  return addStairs(step());
}; // stairCase(4)

/*********************************************************Mini-Max Sum*************************************************************/

const miniMaxSum = (arr) => {
  const sum = (arr) => arr.reduce((a, c) => a + c);

  const val = (method) => {
    const newArr = Array.from(arr);
    newArr.sort((a, b) => a - b)[method]();
    return sum(newArr);
  };
  const minVal = val("pop");
  const maxVal = val("shift");
  return `${minVal} ${maxVal}`;
}; // miniMaxSum([793810624, 895642170, 685903712, 623789054, 468592370])

/************************************************************Birthday Cake Candles***********************************************/
const birthdayCakeCandles = (arr) => {
  const array = arr.sort((a, b) => b - a);
  const [talest] = array;
  return array.lastIndexOf(talest) + 1;
}; // console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]))

const timeConversion = (s) => {
  const [hr, min, sec] = s.split(":");
  const isMidNight = () => parseInt(hr) === 12 && /^[0-9]+AM$/g.test(sec);
  const isAfterNoon = () => parseInt(hr) < 12 && /^[0-9]+PM$/g.test(sec);
  const newSec = sec.substring(0, 2);
  return isAfterNoon()
    ? `${parseInt(hr) + 12}:${min}:${newSec}`
    : isMidNight()
    ? `00:${min}:${newSec}`
    : `${hr}:${min}:${newSec}`;
}; //console.log(timeConversion('07:05:45M'))

/************************************************************Grading Students***********************************************/
const gradingStudents = (grades) => {
  const roundGrade = (grade) => Math.ceil(grade / 5) * 5;
  const roundable = (grade) => grade > 37 && roundGrade(grade) - grade < 3;
  return grades.map((grade) => (roundable(grade) ? roundGrade(grade) : grade));
}; // console.log(gradingStudents([73,67,38,33]))

/************************************************************Apple and Orange***********************************************/

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const add = (a) => (b) => a + b;
  const fromApple = add(a);
  const fromOrange = add(b);
  const applesDistance = apples.map(fromApple);
  const orangesDistance = oranges.map(fromOrange);
  const onHouse = (fruits) =>
    fruits.filter((point) => point >= s && point <= t).length;

  return `${onHouse(applesDistance)}\n${onHouse(orangesDistance)}`;
}; //console.log(countApplesAndOranges (7, 10, 4, 12, [2,3,-4], [3,-2,, -4]))

/****Breaking the Records*****/
const breakingRecords = (scores) => {
  let [maxTally, minTally] = [0, 0];
  let minRecord = scores[0];
  let maxRecord = scores[0];
  scores.forEach((score) => {
    if (score > maxRecord) {
      maxRecord = score;
      maxTally += 1;
    } else if (score < minRecord) {
      minRecord = score;
      minTally += 1;
    }
  });
  return [maxTally, minTally];
};

/*****BirthdayChocolate****/
const getTotalX = (a, b) => {
  let arr = Array.from(Array(100), (_, i) => i + 1);
  // 1) get all integeters <= 100 that the items in the 1st argument are a factor of
  // 2)of the integers from 1) get the ones that are factors of all the  items in 2nd argumet, return their length
  arr = arr.filter((v) => a.every((int) => v % int === 0));
  arr = arr.filter((int) => b.every((v) => v % int === 0));
  return arr;
};

const divisibleSumPairs = (n, k, ar) => {
  let res = 0;
  const numbers = [...Array(n).keys()];
  numbers.forEach((i, _, arr) => {
    arr.forEach((j) => {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        res += 1;
      }
    });
  });
  return res;
};

const migratoryBirds = (arr) => {
  const groupedBirds = [];
  const birdSpecies = [...new Set(arr)];
  birdSpecies.forEach((specie) =>
    groupedBirds.push(arr.filter((s) => s === specie))
  );
  const maxCount = groupedBirds.reduce((a, b) => (a.length > b.length ? a : b))
    .length;
  const mostCommonBirds = groupedBirds
    .filter(({ length }) => length === maxCount)
    .flatMap((int) => int);
  return Math.min(...mostCommonBirds);
};

// console.log(migratoryBirds([1,4,4,4,5,3]));

const dayOfProgrammer = (year) => {
  const getCallendarSystem = (year) => {
    return year === 1918
      ? { calendar: "Transition", year }
      : year <= 1917
      ? { calendar: "Julian", year }
      : { calendar: "Georgian", year };
  };
  const GeorgialeapYear = (year) =>
    (year >= 1918 && year % 400 === 0) ||
    (year >= 1918 && year % 4 === 0 && year % 100 !== 0);
  const julianLeapYear = (year) =>
    year >= 1700 && year <= 1917 && year % 4 === 0;
  const currentSystem = getCallendarSystem(year);
  const { calendar } = currentSystem;
  const dayOfProgrammerInJulianOrGeorian = (year) => {
    if (julianLeapYear(year) || GeorgialeapYear(year)) {
      return `12.09.${year}`;
    }
    return `13.09.${year}`;
  };
  return calendar === "Transition"
    ? `27.09.${year}`
    : dayOfProgrammerInJulianOrGeorian(year);
};

console.log(dayOfProgrammer(2021));

function bonAppetit(bill, k, b) {
  const annasBill = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;
  annasBill === b ? console.log("Bon Appetit") : console.log(b - annasBill);
}

// console.log(bonAppetit([3,10,2,9], 1, 12));

/*****Sock Merchant****/
function sockMerchant(n, ar) {
  const arr = [...ar].sort((a, b) => a - b);
  const set = [...new Set(arr)];
  if (set.length === ar.length) return 0;
  const res = set.map((i) => arr.filter((v) => v === i));
  const pop = (arr) => {
    arr.splice(0, 1);
    return arr;
  };
  const getPairs = (arr) =>
    arr.length % 2 === 0 ? arr.length : pop(arr).length;
  const pairs = res.map(getPairs).filter((i) => i !== 0);
  const countPairs = (arr) => arr.reduce((a, b) => a + b) / 2;
  return countPairs(pairs);
}

/*****Drawing Book****/
const pageCount = (n,p) => {
  if(p === 1 || p === n || ( n % 2 !== 0 && n - p === 1))  return 0;
  if ( n % 2 === 0 && n - p === 1) return 1;
  const countFromFront = (int) => Math.round((int-1)/2);
  const countFromBack = (int) => Math.floor((n-int)/2);
  return Math.min(countFromFront(p),countFromBack(p));
}