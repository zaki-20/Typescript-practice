"use strict";

var greetings = "Hello Zack";
greetings.toLowerCase();
console.log(greetings);
// number
var userId = 334455.3;
userId.toFixed();
// userId = "zack"
// boolean
var isLoggedIn = false;

// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }

  // Type alias

type User = {
    name: string;
    age: number;
    address?: string;
};

function login(userData: User): User {
    return userData;
}

// const user = {
//     name: 'Zaki,
//     age: 30,
// };
