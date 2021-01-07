// type annotation you tell ts the type
let numApples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];

const today = new Date();

today.getMonth();

const person = {
  age: 20,
};

// class
class Color {}

const red: Color = new Color();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// type inference ts guesses the type
// declaratn   initialization
const color = "black";
// if decl and init are on same line, typescript can refer to  type form initialization
// always use type inference

// when to use annotation
// 1) function that returns any type
const json = '{"x":10,"y":20}';
// coordinates will be "any" type
const coordinates = JSON.parse(json);
// try to avoid "any" at all cost
// how to avoid "any"
const coordinates2: { x: number; y: number } = JSON.parse(json);

// 2) when we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cant be inferred correctly

let numbers = [-10, -1, 12];
let numAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numAboveZero = numbers[i];
  }
}
