function findDuplicatesUsingObject(arr) {
    const counts = {};
    const duplicates = [];
    for (const element of arr) {
      counts[element] = (counts[element] || 0) + 1;
      if (counts[element] == 2) {
        duplicates.push(element);
      }
    }
    console.log(counts)
    return duplicates;
  }
  let string = "Hello World"
  const myArray = string.split("");
  // console.log(myArray);
  const duplicates = findDuplicatesUsingObject(myArray);
  console.log(duplicates); 