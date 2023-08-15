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