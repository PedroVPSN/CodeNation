//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let cars = [
    "Audi",
    "BMW",
    "Ford",
    "Toyota",
    "Ferrari"
]
cars.splice(4, 0, "Posh")
console.log(cars)