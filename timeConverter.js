// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input
// 07:05:45PM

// Sample Output
// 19:05:45

function main(s) {
  // Write your code here
  /**
   * if the string s contains an AM, remove the am and return string.
   * else if it contains PM, add 12 to it.
   * if it returns an answer equal to 24, change it to zero and return
   */

  if (s.includes("AM")) {
    if (Number(s.slice(0, 2)) === 12) {
      return ("00" + s.slice(2)).slice(0, -2);
    }
    return s.slice(0, -2);
  } else {
    let changedTime = 0;

    const hourTime = s.slice(0, 2);

    if (hourTime === "12") {
      return s.slice(0, -2);
    } else {
      const remainingTime = s.slice(2);

      const newHourTime = Number(hourTime) + 12;

      changedTime = newHourTime.toString() + remainingTime;

      return changedTime.slice(0, -2);
    }
  }
}

console.log(main("12:05:45AM"));
