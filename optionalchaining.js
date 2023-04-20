// The Optional Chaining (?.) operator accesses an object's property or calls a function. 
// If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

const users = [
    {
        name: "Archit",
        age: 22,
        address: {
            street: "GIDC Electronics Estate",
            city: "Gandhinagar",
            state: "Gujurat",
            zip: 473226,
        }
    },
    {
        name: "Porwal",
        age: 21,
        address: {
            street: "Swagat Afford",
            city: "Gandhinagar",
            state: "Gujurat",
            zip: 473226,
            HouseNumber: 'P502'
        }
    },
    // {
    //     defaultHouseNumber: 'P502'
    // }
]

const defaultHouseNumber = 'P502'

console.log(users[0]?.name)

// Optional Chaining
console.log(users[2]?.name)

// Null Coalescing Operator
console.log(users[0].address.houseNumber??defaultHouseNumber);
// console.log(users[0].address.houseNumber??users[2].defaultHouseNumber);
