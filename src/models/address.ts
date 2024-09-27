export default class Address {
  id: number;
  country: string;
  zip: string;
  city: string;
  street: string;
  houseNumber: number;

  constructor(props: any) {
    this.id = props.id;
    this.country = props.country;
    this.zip = props.zip;
    this.city = props.city;
    this.street = props.street;
    this.houseNumber = props.houseNumber;
  }
}
