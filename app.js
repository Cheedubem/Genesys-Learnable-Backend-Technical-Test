// Given a list of integers, create a function that returns the nth-rarest item.
// The function, should be called nth_most_rate signature and its signature nth_most_rate signature(list,n)
// where list is the array of integers and n is the nth rarest term.
// For example in ([5,4,5,4,5,4,4,5,3,3,3,2,2,1,5], if 2 is supplied as n,
// the answer is 2 as 2 is the 2nd rarest item.

function nthMostRare(arr, n) {
  const counts = {};

  arr.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });

  const sortedItems = Object.entries(counts).sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  return sortedItems[n - 1][0];
}

// Example usage:
const arr = [5, 4, 5, 4, 5, 4, 4, 5, 4, 3, 3, 2, 2, 1, 5];
const n = 2;
const result = nthMostRare(arr, n);
console.log(result);
