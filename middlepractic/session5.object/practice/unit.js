let upperName;

function sayHello(name){
  upperName = name.toUpperCase();
    return "Wellcome Mr. " + name;
}

let yourName = "Johnson";

var result = sayHello(upperName);

console.log(result);
console.log(sayHello("Smith"));
