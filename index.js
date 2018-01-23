const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
 // kittens.push(name); 
}

/*
1) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array
*/

function destructivelyPrependKitten(name) {
 // kittens.unshift(name);   
}

/*
  2) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array
*/

function destructivelyRemoveLastKitten() {
 // kittens.pop();   
}

/*      

  3) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array
*/

function destructivelyRemoveFirstKitten() {
 // kittens.shift();   
}

/*      

  4) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array
*/

function appendKitten(name) {
// appends a kitten to the kittens array and returns a new array
  var newKittens = [...kittens, name];
  return newKittens;  
}

function prependKitten(name) {
// prepends a kitten to the kittensarray and returns a new array
  var newKittens = [name, ...kittens];
  return newKittens;  
}

function removeLastKitten() {
// removes the last kitten in the kittens array and returns a new array
  var newKittens = kittens.slice(0, kittens.length-1);
  return newKittens;
}

function removeFirstKitten() {
// removes the first kitten from the kittens array and returns a new array
  var newKittens = kittens.slice(1); 
  return newKittens;
}

