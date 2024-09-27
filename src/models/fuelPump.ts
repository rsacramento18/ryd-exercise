type FuelType = {
  fuelType: number;
  name: string;
  type: string;
}

export default class FuelPump {
  pumpId: string;
  name: string;
  fuelType: FuelType;

  constructor(props: any) {
    this.pumpId = props.pumpId;
    this.name = props.name;
    this.fuelType = props.fuelType;
  }
}

