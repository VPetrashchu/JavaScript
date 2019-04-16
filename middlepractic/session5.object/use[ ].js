// [ ] використовуються коли ключ невідомий або в циклі
let user = {
    firstName: 'John123',
    secondName: 'Connor',
    login: 'T2',
    password: 'doomsday',
    age: 25,
    //key: 'test value'
};
let key;

for (key in user) {
    console.log(user[key]);//не console.log(user.key)
    console.log(key);
    console.log("========");
    console.log(user.key)
}