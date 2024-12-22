import {faker} from '@faker-js/faker';
import {Mappable} from './CustomMap';
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `
    <div>
      <h4>Company Name: ${this.companyName}</h4>
      <h5>Catchphrase: ${this.catchPhrase}</h5>
    </div>
    `;
  }
}
