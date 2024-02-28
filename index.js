// Iteration 1: Names and Input
let hacker1 = "Gwen"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "George"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length + hacker1.length} characters!`)
}

// Iteration 3: Loops
let spacedName = ""
let driverUpper = hacker1.toUpperCase();

for (let i = 0; i < driverUpper.length; i++) {
  // const driverChar = driverUpper[i];
  spacedName += driverUpper[i] + " ";
}

console.log(spacedName)

let reverseName = ""
for (let i = driverUpper.length - 1; i >= 0; i--) {
  // const driverChar = driverUpper[i];
  reverseName += driverUpper[i] + " ";
}

console.log(reverseName)

if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
  console.log("What?! You both have the same name?")
} else if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first")
} else {
  console.log("Yo, the navigator goes first, definitely")
}


let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum neque at volutpat posuere. Ut et pretium justo, nec elementum elit. Donec at tortor fermentum, porta purus tempus, ultrices metus. Aliquam id libero eget sem ultrices fermentum at sit amet lacus. Nunc feugiat mi sed neque consectetur, a porttitor nisi porttitor. Quisque cursus gravida nisi eget volutpat. Maecenas aliquam lorem id urna aliquam, at varius magna posuere. Curabitur nec dictum quam, non vulputate lorem. Suspendisse elementum lacus tincidunt arcu ultricies faucibus ut sed tellus. Ut dapibus odio diam, eu dapibus leo euismod ac. Integer malesuada, augue sed scelerisque ornare, augue ante gravida ante, efficitur ullamcorper turpis nulla sit amet tortor. Sed magna arcu, convallis vel bibendum vel, consectetur et nulla. Nunc porttitor orci eget vestibulum interdum. Fusce id interdum nibh.Maecenas placerat mollis sapien a bibendum. Nam feugiat ultricies lacus. Fusce sed iaculis elit, eget consectetur justo. Suspendisse id lacinia felis. Aenean orci leo, pretium a facilisis in, accumsan ut augue. Aenean ultricies risus ante. Phasellus quis hendrerit urna, non gravida libero. Vivamus ac ex sed urna interdum rutrum sit amet id dui. Nullam semper quis erat eget fringilla. Sed diam eros, vestibulum in tellus in, molestie fermentum ligula. Morbi sed laoreet elit. Mauris tristique sem non arcu sodales tempor. Vivamus congue nisl ac tortor venenatis lobortis. In bibendum orci quis dui vulputate gravida. In tincidunt nulla et volutpat fringilla. Integer cursus efficitur eros eget vehicula. Pellentesque sodales quis quam a gravida. Donec interdum faucibus magna vel fermentum. Sed at facilisis justo. Proin condimentum, eros at lacinia rutrum, diam nisi suscipit dui, vehicula rutrum erat libero vel lectus. In sodales urna accumsan ipsum ornare, quis rutrum purus bibendum. In aliquet, augue in porttitor sollicitudin, sapien magna hendrerit leo, eget fringilla eros dui quis orci. Mauris eget orci condimentum, lobortis lacus vitae, elementum tellus. Vivamus molestie, mi tempus convallis pulvinar, nisi felis lacinia dolor, ac tincidunt dui metus vel justo. Vivamus consequat tempor aliquam. Maecenas lacus ex, pretium vitae varius vel, elementum nec tellus."

const words = longText.split(' ')
if (words.length !== 0) {
  console.log(words.length);
}
else {
  console.log(0);
}

let count = 0;

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (word === "et") {
    count++
  }
}
console.log("count: ", count);

let phraseToCheck = "No 'x' in Nixon";

let newPhraseToClean = "";
let newPhraseReversed = "";


for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i].toUpperCase() !== phraseToCheck[i].toLowerCase()) {
    newPhraseToClean += phraseToCheck[i];
  }
}

for (let i = newPhraseToClean.length - 1; i >= 0; i--) {
  newPhraseReversed += newPhraseToClean[i];
}
console.log(newPhraseReversed)
console.log(newPhraseToClean)

if (newPhraseToClean.toLowerCase() === newPhraseReversed.toLowerCase()) {
  console.log("Yes, you did it")
}
