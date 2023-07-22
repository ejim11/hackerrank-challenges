/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
  // Write your code here
  const sortedArr = arr.sort((a, b) => a - b);

  const median = sortedArr[Math.floor(sortedArr.length / 2)];

  return median;
}

console.log(findMedian([0, 1, 2, 3, 5, 4, 6]));
