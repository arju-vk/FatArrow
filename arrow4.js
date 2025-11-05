function groot() {
  console.log("Good Morning");
}
groot();
function groot() {
  console.log("Good Night");
}
groot();

// function over riding aka Hoisting.

var wish = () => {
  console.log("GM");
};
wish();
var wish = () => {
  console.log("GN");
};
wish();
