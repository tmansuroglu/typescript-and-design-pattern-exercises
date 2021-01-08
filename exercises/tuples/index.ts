const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// types are defined with or. so this array can be only string or only numb etc.
const pepsi = ["brown", true, 40];

// now it is a tuple because type of element on specific index is defined
const pepsi2: [string, boolean, number] = ["brown", true, 40];

// creates a tuple type
type Drink = [string, boolean, number];

const pepsi3: Drink = ["clear", true, 10];

// where to use tuples
// tuples are not descriptive, try not to use
