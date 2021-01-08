const carMakers: string[] = ["ford", "toyota", "chevy"];

const carsByMake = [["f150"], ["corolla"], ["camaro"]]; // type string[][]

// Help with inference when extracting values
const car = carMakers.pop();

// since you define type, methods become available as autocomplete
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// flexible types

// inferred type is date and string
const importantDates = [new Date(), "2030-10-10"];

const importantDates2: (Date | string)[] = [new Date()];
