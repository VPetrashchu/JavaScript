//delete видалення оператора з обєкта
let user = {
    firstName: 'John123',
    secondName: 'Connor',
    login: 'T2',
    password: 'doomsday',
    age: 25
};
user.firstName = "Smith";

delete user.age;
//отримання значення
let name = user.firstName;
let surname = user['secondName'];

console.log(user.age);
//console.log(user.firstName);
console.log(user);