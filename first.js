const instagram = {
  title: "BALL PEN",
  price: 500,
  rating: 4,
  offer: true,
};
instagram["price"] = instagram["price"] + 100;
instagram["title"] = "GEL PEN";
console.log(instagram.title);
console.log(instagram.offer);

console.log(instagram);

let Car =
  "SUV 500"; /*let is consider to be most presiced as we cannot name the variable same if we
do so, it throws an error  in var we can use the same name variables which might be confusing while working
on big projects*/

Car = "MERCEDES";
const car = "KIA";
console.log(car);
console.log(Car);

let ax = 30;
let b = 32;
console.log(ax < b && ax == 30); // THIS && IS USED TO CHECK THE BOTH VALUES ARE TRUE OR NOT

let input = prompt("please enter the marks between 0 to 100");
if (input <= 100 && input >= 80) {
  console.log("THE GRADE OF STUDENT IS A");
} else if (input <= 89 && input >= 70) {
  console.log("THE GRADE OF STUDENT IS B");
} else if (input <= 69 && input >= 60) {
  console.log("THE GRADE OF STUDENT IS C");
} else if (input <= 59 && input >= 50) {
  console.log("THE GRADE OF STUDENT IS D");
} else {
  console.log("THE GRADE OF STUDENT IS E");
}

let inputx = prompt("please enter the marks between 0 to 100");
if (inputx <= 100 && inputx >= 80) {
  grade = "A";
} else if (inputx <= 89 && inputx >= 70) {
  grade = "B";
} else if (inputx <= 69 && inputx >= 60) {
  grade = "C";
} else if (inputx <= 59 && inputx >= 50) {
  grade = "D";
} else {
  grade = "E";
}
console.log("THE GRADE OF THE STUDENT IS", grade);

one = 100;
console.log(one++);
console.log(one);
console.log(++one);

count = 8;
for (x = 0; x <= -1; x++) {
  count += x;
}
console.log(count);

let i = 8;
let j = 0;
while (j <= i) {
  console.log("hello js");
  j++;
}

let m = 2;
do {
  console.log("INDIA IS A COUNTRY WITH A HUGE DIVERSITY");
  m++;
} while (m < 67);

for (let even = 0; even <= 100; even++) {
  if (even % 2 !== 0) {
    console.log("ODD No. is", even);
  }
}

let num = 25;
let inputc = prompt("GUESS THE NO. BETWEEN 0-100");
while (num != inputc) {
  inputc = prompt("WRONG ANSWER,AGAIN GUESS THE NO. BETWEEN 0-100");
}
console.log("YOU HAVE GUESSED THE CORRECT NUMBER", inputc);

let strings =
  "HEY THERE IM LEARNING JAVASCRIPT"; /*isUpperCase , isLowerCase , trim , (strings are immutable
    so, we cant modify it rather than this provide new variable )*/
let str = strings.toLowerCase();
console.log(strings.toLowerCase());
console.log(str);

let repl = "AYAAN IS A";
let repp = " GOOD BOY";
let fruit = "APPLEPLEPLEPELEP";
console.log(repl, "\t", repp + " AND INTELLIGENT TOO");
console.log(repl, "\n", repp + " AND KIND TOO");
console.log(repl.length);
console.log(repp.toLowerCase());
console.log(repp.replace("Y", "I"));
console.log(fruit.replace("LE", "xz"));
console.log(fruit.replaceAll("LE", "xz"));
console.log(repp);
tri = repl.concat(repp);
console.log(tri);
console.log(repl.slice(0, 5));

let inpt = prompt("ENTER THE NAME");
console.log(`@${input}${inpt.length}`);

//for in is used to get the object in laymmans understanding the dictionary, to get keys and its values ex=//
let obj = { a: "cat", b: "dog", c: "monkey" };
for (let key in obj) {
  console.log(`THE KEY ${key} : ${obj[key]}`);
}

let objECT = "DUBAI";
for (let key of objECT) {
  console.log(`THE KEY IS ${key}`);
}

//for of is used for the iteration in strings and arrays //

let runs = ["shifa", "ayaan", "azlan", "kashan", "sadaf"];
console.log(Object.keys(runs));
//console.log(runs.forEach(item,index))   this is wrong method
runs.forEach((item, index) => {
  // forEach takes a callback function, and it's used for iteration, not for logging the array
  console.log(index, item); //will iterate item and then index by default but we can write as per our preference it gives in a string form
});
console.log(runs.reverse()); //reverse changes the original array
for (let i of runs) {
  console.log(i.toUpperCase());
}

let flag = new Uint16Array([
  0x00, 0x2a, 0x3d, 0x5c,
]); /*The Uint8Array is a typed array in JavaScript that represents an
 array of 8-bit unsigned  integers. When you use new Uint8Array, you are creating a new instance of this typed array.*/
for (let i of flag) {
  console.log(i);
}

let ava = [85, 97, 44, 37, 76, 60];
num = null;
for (let i of ava) {
  num = num + i;
}
console.log(`AVERAGE OF THE MARKS IS ${num / ava.length}`);

percent = [250, 645, 300, 900, 50];
empt = [];
m = 1;
for (let i of percent) {
  console.log(`THE ACTUAL PRICE OF THE INDEX ${m}  IS ${i}`);
  let per = i / 10;
  let adds = i - per;
  empt.push(adds);
  console.log(`THE OFFER PRIZE OF INDEX ${m} IS NOW ! ${adds}`);
  m++;
}
console.log(`LIST BEFORE OFFER [${percent}]`);
console.log(`LIST AFTER OFFER [${empt}]`);

let companies = ["Bloomerang", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift(); //UNSHIFT IS FOR ADDING AT STARTING AND SHIFT IS FOR REMOVING THE FIRST ELEMENT,CHANGE THE ORIGINAL ARRAY
console.log(companies); //POP FOR REMOVING THE LAST ELEMENT,PUSH IS FOR ADDING IN STARTING,  CHANGE THE ORIGINAL ARRAY
m = companies.indexOf("Uber"); //toString id for making the array into string IT DO NOT CHANGE THE ORIGINAL ARRAY
companies.splice(m, 1, "Ola"); //(m=from which index we have to start,1=first element including m which has to be remove,ola=which has to be add )
console.log(companies);
companies.push("Amazon");
console.log(companies);
console.log(companies.length);
console.log(companies.toString());

let sadaf = "she is pretty girl";

// Find the index of "pretty"
let indexPretty = sadaf.indexOf("pretty");

if (indexPretty !== -1) {
  // Remove "pretty" and add "love" at the same index
  adject =
    sadaf.slice(0, indexPretty) +
    "beautiful" +
    sadaf.slice(indexPretty + "pretty".length);
}

console.log(adject);
console.log(sadaf);

const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

const a = ["a", "b", "c"];
for (const [index, element] of a.entries()) {
  console.log(index, element); //gives output in string form
  console.log(typeof element);
}

// 0 'a'
// 1 'b'
// 2 'c'
const array = ["a", "b", "c"]; //gives output in array form
const arrayEntries = array.entries();
for (const element of arrayEntries) {
  console.log(element);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

const words = ["hello", "world"];
const letters = words.flatMap((word) => word.split(""));
console.log(letters);
// letters is now ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
const wordsz = ["hello", "world"];
const lettersz = wordsz.map((word) => word.split(""));
console.log(lettersz);
// letters is now [['h', 'e', 'l', 'l', 'o']['w', 'o', 'r', 'l', 'd']]

List = [2, 3, 4, 5, 2, 4, 5, 4, 8, 7, 8];
console.log(List.shift());
List.shift();
console.log(List);
console.log(List.with(0, 5)); //0 is index and replacing 0 index and adding 5 not
List.splice(0, 1, 5);
console.log(List);
console.log(List.splice(5, 1, 2)); //will print which is removed
console.log(List.splice(2));

const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
iterator.next(); // { value: "a", done: false }
iterator.next(); // { value: "b", done: false }
iterator.next(); // { value: "c", done: false }
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next(); // { value: undefined, done: true }
console.log(iterator.next().value); // undefined

let listeez = ["a", "v", "e", "g", "f", "r"];
listeez.copyWithin(4, 3);
console.log(listeez);
listeez.copyWithin(4, 3);
console.log(listeez);
