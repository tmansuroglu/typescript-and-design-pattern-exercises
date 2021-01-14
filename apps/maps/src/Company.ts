import faker from "faker";

class Company {
  name: string;
  catchPhrase: string;
  location: {
    latidue: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latidue: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }
}

export default Company;
