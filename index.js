var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray
}

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.slice(-1)
}
