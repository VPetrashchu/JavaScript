let user = {
    firstName: 'John123',
    secondName: 'Connor',
    login: 'T2',
    password: 'doomsday',
    age: 25
};
user.firstName = "Smith";

//отримання значення
let name = user.firstName;
let surname = user['secondName'];

console.log(name);
//console.log(user.firstName);