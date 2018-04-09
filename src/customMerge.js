export default function customMerge(obj1, obj2) {
  const objToReturn = {};
  let property1, property2;

  if (!obj1) {
    return obj2;
  } else if (!obj2) {
    return obj1;
  }

  for (property1 in obj1) {
    if (property1 in obj2) {
      if (
        typeof obj1[property1] !== 'object' ||
        typeof obj2[property1] !== 'object' ||
        !obj2[property1] ||
        !obj1[property1]
      ) {
        objToReturn[property1] = obj2[property1];
      } else {
        objToReturn[property1] = customMerge(obj1[property1], obj2[property1]);
      }
    } else {
      objToReturn[property1] = obj1[property1];
    }
  }
  for (property2 in obj2) {
    if (!(property2 in objToReturn)) {
      objToReturn[property2] = obj2[property2];
    }
  }

  return objToReturn;
}
