// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Problem:
//We work for a company building a smart home thermometer.calculate the temperature amplitude.
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) understand the problem
// - What is temperature amplitude ? Answer:difference between highest and lowest temp
// - How to compute max and min temperature?
// - What's a sensor error? And what to do ?

//2) Breaking up into sub-problems
// - How to ignore errors ?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max(amplitude) and return it

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp < min) min = curTemp;
    if (curTemp > max) max = curTemp;
  }
  console.log(min, max);
  return max - min;
};


const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/
// problem 2:
// Function should now receive 2 arrays of temperature

// 1) Understanding the problem
// - With 2 arrays,should we implement functionality twice?
// NO! just merge two arrays

// 2) Breaking into sub-programs
// - How to merge Array

/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp < min) min = curTemp;
    if (curTemp > max) max = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // B) FIND
  console.log(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

//Using a Debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    // debugger;
    if (curTemp < min) min = curTemp;
    if (curTemp > max) max = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);

//? Challenge 1

//  1) Understanding the problem
//  - Should the format be same
//  - Is the given data in order

// 2) Breaking into sub-programs
// - How to format the output
// - How to put degree symbol

const printForecast = function (arr) {
  let output = '... ';
  for (let i = 0; i < arr.length; i++) {
    output = output + `${arr[i]} C in ${i + 1} days ... `;
  }
  return output;
};

const a = [17, 21, 23];
console.log(printForecast(a));
