interface Vehicle {
  name: string;
  year: number;
  broken: true;
  summary(): string;
}

// not all props have to match
const oldCivic = {
  name: "civic",
  broken: true,
  summary(): string {
    return "hey";
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
};

// general strategy for reusable code in TS
// - create functions that accept arguments that are typed with interfaces
// - objects/classes can decide to "implement" a given interface to work with a function
