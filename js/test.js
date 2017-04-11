function sayHello() {
  console.log("Hello!");
}
function send(){
  alert("Your message sent");
}
function doSomething(thing){
  console.log("doing the ",thing);
}

function sayingHello(name) {
  console.log("Hello ",name);
}

if ((5===5) && (5 < 6)) {
  console.log("5 equal 5 and less than 6");
}

function square(x){
  return x*x;
}

var Square = function(x) {
  return x*x;
};

var x = "outside";
var f1 = function() {
  var x = "inside f1";
  return x;
};
console.log(f1());
console.log(x);

var f2 = function() {
  x = "inside f2";
};
f2();
console.log(x);

sayHello();
doSomething("own shit");
sayingHello('R2-D2');
console.log(square(12));
console.log(Square(12));
//send();  alert gives an error when try to compile/run on node
document.write("Anakin Skywalker aka Darth Vader");