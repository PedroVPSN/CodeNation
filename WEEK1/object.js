//1:__________________________________________________________________________________________________

// const person = {
//     name: "Pedro",
//     age: 34,
//     hairColor: "black",
//     eyesColor: "brown",
//     legs: 4,
    
//     legRemoval(){
//         return (this.legs - 2)
//     },

//     sayHi() {
//         return `Hello, my name is ${this.name}`    
//     },
//     myAge() {
//         return `My new age is now ${this.age = 24}`
//     }
// }

//  person["songs"] = ["The best of you", "Love me do", "underWall", "When the sun goes down"]

 //person["legs"] = 4

//  console.log(person.legRemoval())
//  console.log(person.sayHi())
// console.log(person.myAge())
//2:__________________________________________________________________________________________________

// let offer = "none"
// let time = 1500

// const cafe = {
//     name: "whitesheep",
//     seatingCapacity: 100,
//     hasSpeacialOppers: true,
//     drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich", 
//     noOffer: "Sorry no offer"
// }

// if (time < 1100) {
//     offer = cafe.breakfastOffer
//     console.log(cafe.breakfastOffer)
// }
// else if (time < 1500) {
//     offer = cafe.lunchOffer
//     console.log(cafe.lunchOffer)
// }
// else {
//     console.log(cafe.noOffer)
// }
// cafe.biscuits = ["waffle", "shortbread"]
// console.log(cafe.biscuits)

// //3:__________________________________________________________________________________________________

// //put this if statement in a function
// //change the value of the day each time it is called.

// let day = "Monday"
// let alarm = "none"

// const alarmClock = {
//     weekendAlarm: "No alarm needed",
//     weekDayAlarm: "Get up at 7 am"
// }

// const myAlarm = (day) => {
//     if (day == "Saturday" || day == "Sunday") {
//         larm = alarmClock.weekendAlarm
//         console.log(alarmClock.weekendAlarm)
//     }
//     else {
//         console.log(alarmClock.weekDayAlarm)
//     }
// }
// myAlarm("Sunday")
// myAlarm("Monday")
// myAlarm("Saturday")


// //4:__________________________________________________________________________________________________

//Create an object called pet with key values of:
// name, typeOfPet, age, colour, energy, health, toilet (true/false)
// And methods called eat, drink, sleep, train, play, toilet break, age, die. They should return
// a string saying [Your pet name] is eating/drinking.

const pet = {
    name: "Hoss",
    typeOfPet: "Dog",
    age: 3,
    color: "black",
    energy: 100,
    health: 100,
    toilet: true,

    eat(){
        
        //this.energy = this.energy + 10;
        this.energy += 10

        return `${this.name} is eating. He has ${this.energy} energy now.`
    },
    drink(){
        this.energy += 5
        return `${this.name} is drinking. He has ${this.energy} energy now.`
    },
    sleep() {
        this.energy += 10
        return `${this.name} is sleeping. He has ${this.energy} energy now.`
    },
    train(){
        this.energy -= 10
        return `${this.name} is training. He lost ${this.energy}, his energy is ${this.energy} now. `
    },
    play(){
        this.energy -= 10
        return `${this.name} is playing. He lost 10 of his energy. His energy is ${this.energy} now.`
    },
    toiletBreak(){
        if (this.toilet == true) {
            return `${this.name} is busy.`
        }
        else {
            return `${this.name} is not busy.`
        }
    },
    age(){
        return `${this.name} is ${this.age} year old.`
    },
    die(){
        return `${this.name} has died.`
    },

}
console.log(pet.drink())
console.log(pet.play())
console.log(pet.play())
console.log(pet.toiletBreak())
console.log(pet.toiletBreak())


//5:__________________________________________________________________________________________________


// const coffeeShop = {
//     branch: "Manchester",
//     drinks: ["Coke - £2", "Coffee - £2", "Tea - £1"],
//     food: ["Sandwich - £3", "Soup - £2", "English Breakfast - £5"]
// }

