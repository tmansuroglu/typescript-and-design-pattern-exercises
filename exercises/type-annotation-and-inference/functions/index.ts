// type annotation on return
const add = (a: number, b: number): number => {
  return a + b;
};

// type inference on return
const subtract = (a: number, b: number) => {
  return a - b;
};

const logger = (message: string): void => {
  console.log(message);
  // or return null
};

// if func never returns
const throwErr = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

// destructure parameter
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(forecast.date, forecast.weather);
};

const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// if you are going to use destructuring this is how you use type annotation
const { age }: { age: number } = profile;
// nested destructuring
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
