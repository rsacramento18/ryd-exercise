CREATE TABLE IF NOT EXISTS ADDRESS (
  id SERIAL NOT NULL,
  country varchar(255) NOT NULL,
  zip varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  street varchar(255) NOT NULL,
  house_number int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  isDeleted boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS FuelType (
  id SERIAL NOT NULL,
  name varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  isDeleted boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS FuelPump (
  id uuid DEFAULT gen_random_uuid() NOT NULL,
  name varchar(255) NOT NULL,
  fuelType int NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  isDeleted boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id),
  FOREIGN KEY (fuelType) REFERENCES FuelType(id)
);

CREATE TABLE IF NOT EXISTS PetrolStation (
  id SERIAL NOT NULL,
  status varchar(255) NOT NULL,
  address int NOT NULL,
  opening_hours varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  isDeleted boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS PetrolStationPump (
  petrolStationId int NOT NULL,
  fuelPumpId uuid NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  isDeleted boolean NOT NULL DEFAULT FALSE,
  FOREIGN KEY (petrolStationId) REFERENCES PetrolStation(id),
  FOREIGN KEY (fuelPumpId) REFERENCES FuelPump(id),
  PRIMARY KEY (petrolStationId, fuelPumpId)
);




