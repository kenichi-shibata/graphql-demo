// if they are return the first object else return empty object
function deepEqual(array) {
  let equal = true;
  for (let index = 0; index < array.length; index += 1) {
    if (index !== array.length - 1) {
      if (array[index] !== array[index + 1]) {
        equal = false;
      }
    } else if (array[index] !== array[0]) {
      equal = false;
    }
  }
  return equal ? array[0] : {};
}

function findByProperty(args, array) {
  const tempArray = [];
  for (const key in args) {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index][key] === args[key]) {
        tempArray.push(array[index]);
      }
    }
  }
// now check if all tempArray values are the same
  return deepEqual(tempArray);
}

// same as findByProperty but returns array
function findByPropertyArray(args, array) {
  const tempArray = [];
  if (Object.keys(args).length > 0) {
    for (const key in args) {
      for (let index = 0; index < array.length; index += 1) {
        if (array[index][key] === args[key]) {
          tempArray.push(array[index]);
        }
      }
    }
    return tempArray;
  }
  return array;
}

export { findByProperty, findByPropertyArray };
