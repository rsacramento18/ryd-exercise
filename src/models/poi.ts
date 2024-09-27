import Address from './address';
import FuelPump from './fuelPump';

export enum POIStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
}

export enum OpeningHours {
  CASE1 = '1',
  CASE2 = '2',
  CASE3 = '3',
}

export default class POI {
  id: number;
  status: POIStatus;
  address: Address;
  openingHours: OpeningHours;
  pumps: FuelPump[];

  constructor(props: any) {
    this.id = props.id;
    this.status = props.status;
    this.address = props.address;
    this.openingHours = props.openingHours;
    this.pumps = props.pumps;
  }
}
