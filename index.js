// var misc = require("./data/inventory.js");
// // var inventory = new inventoryImport;
// console.log(misc.inventory[1])

// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `addNumbers`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 * 
 * For example, if we invoke `addNumbers` passing 5 and 3,
 * the returned value should be 8.
 *
 * NOTE: This example has been completed for you.
 */
function addNumbers(num1, num2) {
    return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
 */
function makePersonObject(id, name, email) {
    let person = { id, name, email };
    console.log(person);
    return person;
}

/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
 */
function getName(person) {
    console.log(person.name);
    return "Hello, my name is " + person.name;
}

/**
 * ### Challenge `makeSmartPerson`
 * 
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
 */
function makeSmartPerson(nameArg) {
    var smartPerson = {
        name: nameArg,
        sum: function(a, b) { return a + b },
        speak: function() { return `Hello, my name is ${this.name}` }
    }
    return smartPerson;
}






/*
// ⭐️ Example Test Data ⭐️

var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
  /// ... Truncated
]
*/
/**
 * ### Example Array Challenge:
 * 
 * @instructions
 * get3rdCar() should return the string `The car is a Land Rover Defender Ice Edition`
 * 
 *
 * NOTE: This example has been completed for you.
 **/
function get3rdCar(inventory) {
    const the3rd = inventory.find((item, index) => {
        return index === 2 // we use 2 because index is zero-based.
    })
    return `The car is a ${the3rd.car_make} ${the3rd.car_model}`
}

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
 */
function getCarInfoByIndex(inventory, index) {

    const carMake = inventory[index].car_make;
    const carModel = inventory[index].car_model;
    console.log(`This is a ${carMake} ${carModel}.`)
    return `This is a ${carMake} ${carModel}.`
}

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
 */

var inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
    { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
    { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
    { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
    { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
    { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
    { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
    { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
    { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
    { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
    /// ... Truncated
]

function getLastCarInfo(inventory) {

    const carMake = inventory[inventory.length - 1].car_make;
    const carModel = inventory[inventory.length - 1].car_model;
    return `This is a ${carMake} ${carModel}.`
}

getLastCarInfo(inventory)

/**
 * ### Challenge `getCarInfoById`
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
 */
function getCarInfoById(inventory, id) {


    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            var carMake = inventory[i].car_make;
            var carModel = inventory[i].car_model;
            break;
        }
    }

    return `This is a ${carMake} ${carModel}`
}
getCarInfoById(inventory, 1)


/**
 * ### Challenge `sortCarInventory`
 * 
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
 */
function sortCarInventory(inventory) {

    // console.log(inventory.sort((a,b)=>(a.car_model>b.car_model) ? 1: -1 ))  
    return inventory.sort((a, b) => (a.car_model > b.car_model) ? 1 : -1)
}
// sortCarInventory(inventory)

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
 */
function getModelYears(inventory) {
    const modelYears = []
    for (let i = 0; i < inventory.length; i++) {
        modelYears[i] = inventory[i].car_year
    }
    // console.log(modelYears)
    return modelYears

}
// getModelYears(inventory)

/**
 * ### Challenge `getOlderCars`
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
 */


//  WHY IS THIS NOT ACCEPTED!!
function getOlderCars(inventory, lastYear) {
    const cars = []
    let n = 0
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year <= lastYear) {
            cars[n] = inventory[i]
            n += 1
        }
    }
    // console.log(cars)
    return cars
}
getOlderCars(inventory, 1995)


/**
 * ### Challenge `getGermanCars`
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
 */
function getGermanCars(inventory) {
    const cars = []
    var n = 0
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_make == "Audi" || inventory[i].car_make == "Volkswagen" || inventory[i].car_make == "Mercedes-Benz" || inventory[i].car_make == "BMW") {
            cars[n] = inventory[i]
            n += 1
        }
    }
    // console.log(cars)
    return cars
}
// getGermanCars(inventory)


/**
 * ### Challenge refactor to arrow functions
 * 
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 * 
 * const sum = function (a, b) {
 *   return a + b
 * }
 * 
 * const addFive = function(num) {
 *    return num + 5
 * }
 *
 * const argTimesTwo = function (num) {
 *   return num * 2
 * }
 */
const sum = (a, b) => { a + b }
const addFive = (num) => { num + 5 }
const argTimesTwo = (num) => { num * 2 }

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
 */
function carMaker(odometer) {
    const mileage = {
        odometer: odometer,
        drive: function(distance) {
            this.odometer = distance + this.odometer
            console.log(this.odometer)
            return this.odometer
        }
    }
    console.log(mileage)
    return mileage


}
var myPorsche = carMaker(161000)
console.log (`My current mileage is ${myPorsche.odometer} miles`)
myPorsche.drive(150)
myPorsche.drive(75)
myPorsche.drive(82)
console.log ("Vroom Vroom")
console.log (myPorsche.odometer)
console.log ("Let's drive some more")
myPorsche.drive(82)
console.log ("Oh no, here come the cops!")
console.log("You're under arrest")
console.log("Console Log Type Error 76!")



/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
    // IGNORE: Test/Env Detected
    // For Node/Non-browser test env
    module.exports = module.exports || {}
    if (addNumbers) { module.exports.addNumbers = addNumbers }
    if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
    if (getName) { module.exports.getName = getName }
    if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
    if (carMaker) { module.exports.carMaker = carMaker }
    if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
    if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
    if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
    if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
    if (getModelYears) { module.exports.getModelYears = getModelYears }
    if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
    if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
    if (sum) { module.exports.sum = sum }
    if (addFive) { module.exports.addFive = addFive }
    if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}