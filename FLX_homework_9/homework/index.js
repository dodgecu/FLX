const data = [
  {
    _id: "5b5e3168c6bf40f2c1235cd6",
    index: 0,
    age: 39,
    eyeColor: "green",
    name: "Stein",
    favoriteFruit: "apple"
  },
  {
    _id: "5b5e3168e328c0d72e4f27d8",
    index: 1,
    age: 38,
    eyeColor: "blue",
    name: "Cortez",
    favoriteFruit: "strawberry"
  },
  {
    _id: "5b5e3168cc79132b631c666a",
    index: 2,
    age: 2,
    eyeColor: "blue",
    name: "Suzette",
    favoriteFruit: "apple"
  },
  {
    _id: "5b5e31682093adcc6cd0dde5",
    index: 3,
    age: 19,
    eyeColor: "green",
    name: "George",
    favoriteFruit: "banana"
  }
];

/**
 * @param  {*} types - any data type
 * @returns {Array} - an array of data types passed in as arguments
 */

function findTypes(...types) {
  let output = [];
  for (let i = 0; i < types.length; i++) {
    output.push(typeof types[i]);
  }
  return output;
}
findTypes(null, 5, "hello");

/**
 * Applies callback function against each element within provided array
 * @param {Array} arr - Array of any types of data
 * @param {Callback} fn - callback function
 * @returns {undefined}
 */

function executeforEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
executeforEach([22, 3, 8, 4], item => console.log(item));

/**
 * @param {Array} arr - Array of any types of data
 * @param {Callback} fn - callback function
 * @returns {Array} - a new array of elements mutated by provided callback function
 */

function mapArray(arr, fn) {
  const mutated = [];
  executeforEach(arr, element => mutated.push(fn(element)));
  return mutated;
}
mapArray([22, 3, 8, 4], item => Math.sqrt(item));

/**
 * @param {Array} arr - Array of any  data types
 * @param {Callback} fn - Callback function
 * @returns {Array} - a new array of callback-filtered elements
 */

function filterArray(arr, fn) {
  const filtered = [];
  executeforEach(arr, element => {
    if (fn(element)) {
      filtered.push(element);
    }
  });
  return filtered;
}
filterArray([22, 3, 8, 4], item => item < 10);

/**
 * @param {Array.<Object>} people - array of objects
 * @returns {number} - a number of people who are older than 18 years of age
 */

function getAmountOfAdultPeople(people) {
  return filterArray(people, person => person.age > 18).length;
}
getAmountOfAdultPeople(data);

/**
 * @param {Array.<Object>} people - array of objects
 * @returns {Array} - an array of green-eyed people who dig bananas and are aged more than 18 years
 */

function getGreenAdultBananaLovers(people) {
  const filterPeople = filterArray(people, person => {
    return (
      person.age > 18 &&
      person.favoriteFruit === "banana" &&
      person.eyeColor === "green"
    );
  });
  return mapArray(filterPeople, personName => personName.name);
}
getGreenAdultBananaLovers(data);

/**
 * @param {Object} obj - object
 * @returns {Array} - an array of object keys
 */

function keys(obj) {
  const objKeys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objKeys.push(key);
    }
  }
  return objKeys;
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });

/**
 * @param {Object} obj - object
 * @returns {Array} - an array of object values
 */

function values(obj) {
  const objVals = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objVals.push(obj[key]);
    }
  }
  return objVals;
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });

/**
 * @param {Object} date - ISO Date object
 * @returns {string} - formatted date ex.,  Date: 27 of Jan, 2019
 */

function showFormattedDate(date) {
  return `Date: ${date.getDate()} of ${date.toLocaleString("en-US", {
    month: "short"
  })}, ${date.getFullYear()} `;
}
showFormattedDate(new Date("2019-01-27T01:10:00"));

/**
 * @param {Object} date - ISO Date object
 * @returns {boolean} - true or false if year number is even or odd respectively
 */

function isEvenYear(date) {
  return date.getFullYear() % 2 === 0;
}
isEvenYear(new Date("2019-01-27T01:10:00"));

/**
 * @param {Object} date - ISO Date object
 * @returns {boolean} - true or false if month number is even or odd respectively
 */

function isEvenMonth(date) {
  return (date.getMonth() + 1) % 2 === 0;
}
isEvenMonth(new Date("2019-02-27T01:10:00"));
