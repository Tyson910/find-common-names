/**  Generating all possible combos for a given string sorted by length
 * 
 * - TODO: add test for this function
 */
export function getPossibleCombinations(
  str: string,
  { min = 0, max = str.length }: { min?: number; max?: number },
): {
  allPossibleCombinations: string[];
  strGroupedByLength: string[][];
} {
  const arr: string[] = [];
  for (let x = 0, y = 1; x < str.length; x++, y++) {
    arr[x] = str.substring(x, y);
  }
  const combination: string[] = [];
  let temp = "";
  let len = Math.pow(2, arr.length);
  for (let i = 0; i < len; i++) {
    temp = "";
    for (let j = 0; j < arr.length; j++) {
      if ((i & Math.pow(2, j))) {
        temp += arr[j];
      }
    }
    if (temp !== "" && temp.length >= min && temp.length <= max) {
      combination.push(temp);
    }
  }

  const allPossibleCombinations = [...new Set(combination)].sort((a, b) =>
    a.length - b.length
  );

  let strGroupedByLength: string[][] = [];
  let biggestWord = allPossibleCombinations[allPossibleCombinations.length - 1];
  // each word has to have at least one letter
  for (let i = 0; i <= biggestWord.length; i++) {
    // create empty array for each word length
    strGroupedByLength.push([]);
  }
  allPossibleCombinations.forEach((str) => {
    strGroupedByLength[str.length - 1].push(str);
  });

  return { allPossibleCombinations, strGroupedByLength };
}
