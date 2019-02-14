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
 * Returns an array of data types passed in as arguments
 * @param  {*} types - any data type
 * @returns {Array}
 */

function findTypes(...types) {
  let result = [];
  for (let i = 0; i < types.length; i++) {
    result.push(typeof types[i]);
  }
  return result;
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
 * Returns a new array of elements mutated by provided callback function
 * @param {Array} arr - Array of any types of data
 * @param {Callback} fn - callback function
 * @returns {Array}
 */

function mapArray(arr, fn) {
  let mutated = [];
  executeforEach(arr, element => mutated.push(fn(element)));
  return mutated;
}
mapArray([22, 3, 8, 4], item => Math.sqrt(item));

/**
 * Returns a new array of callback-filtered elements
 * @param {Array} arr - Array of any  data types
 * @param {Callback} fn - Callback function
 * @returns {Array}
 */

function filterArray(arr, fn) {
  let mutated = [];
  executeforEach(arr, element => {
    if (fn(element)) {
      mutated.push(element);
    }
  });
  return mutated;
}
filterArray([22, 3, 8, 4], item => item < 10);

/**
 * Returns a number of people who are older than 18 years of age
 * @param {Array.<Object>} inputData - array of objects
 * @returns {number}
 */

function getAmountOfAdultPeople(inputData) {
  return filterArray(inputData, person => person.age > 18).length;
}
getAmountOfAdultPeople(data);

/**
 * Returns an array of green-eyed people who dig bananas and are aged more than 18 years
 * @param {Array.<Object>} inputData - array of objects
 * @returns {Array}
 */

function getGreenAdultBananaLovers(inputData) {
  const filterPeople = filterArray(inputData, person => {
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
 * Returns an array of object keys
 * @param {Object} obj - object
 * @returns {Array}
 */

function keys(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  return arr;
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });

/**
 * Returns an array of object values
 * @param {Object} obj - object
 * @returns {Array}
 */

function values(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });

/**
 * Returns formatted date ex.,  Date: 27 of Jan, 2019
 * @param {Object} date - ISO Date object
 * @returns {string}
 */

function showFormattedDate(date) {
  return `Date: ${date.getDate()} of ${date.toLocaleString("en-US", {
    month: "short"
  })}, ${date.getFullYear()} `;
}
showFormattedDate(new Date("2019-01-27T01:10:00"));

/**
 * Returns true/false if year number is even/odd
 * @param {Object} date - ISO Date object
 * @returns {boolean}
 */

function isEvenYear(date) {
  return date.getFullYear() % 2 === 0;
}
isEvenYear(new Date("2019-01-27T01:10:00"));

/**
 * Returns true/false if month num is even/odd
 * @param {Object} date - ISO Date object
 * @returns {boolean}
 */

function isEvenMonth(date) {
  return (date.getMonth() + 1) % 2 === 0;
}
isEvenMonth(new Date("2019-02-27T01:10:00"));
