// faker needs type definition file
import faker from "faker";
// project called "definitely typed" provides types for libraries find it form npmjs.com.
// make a search for "@types/faker"

class User {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }
}

export default User;
