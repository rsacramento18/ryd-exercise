import { Pool } from "pg";
import POI from '../models/poi';
export default class PoiRepository {
  db: Pool;
  constructor(pool: Pool) {
    this.db = pool;

  }

  async getAll(): Promise<POI[]> {
    const res = await this.db.query('SELECT * FROM PetrolStation WHERE isDelete is not false');
    const obj = {
      poiId: res.rows[0].poi_id,
      status: res.rows[0].status,
      openingHours: res.rows[0].opening_hours,
    };

    return res.rows.map((row) => {
      return new POI({
        poiId: row.id,
        status: row.status,
        openingHours: row.opening_hours,
      });
    });
  }

  async getPoi(poiId: number): Promise<POI | undefined> {
    const res = await this.db.query('SELECT * FROM PetrolStation WHERE id = $1', [poiId]);
    if (res.rows.length === 0) {
      console.log('POI not found');
      return undefined;
    }
    const obj = {
      poiId: res.rows[0].id,
      status: res.rows[0].status,
      openingHours: res.rows[0].opening_hours,
    };
    return new POI(obj);
  }

  createPoi(poi: POI) {
    const insertQuery = 'INSERT INTO PetrolStation (status, address, opening_hours) VALUES ($1, $2, $3)';
    this.db.query(insertQuery, [poi.status, poi.address.id, poi.openingHours]);
  }

  updatePoi(poi: POI) {
    const updateQuery = 'UPDATE PetrolStation SET status = $1, address = $2, opening_hours = $3 WHERE id = $4';
    this.db.query(updateQuery, [poi.status, poi.address.id, poi.openingHours, poi.id]);
  }

  removePoi(poiId: number) {
    const deleteQuery = 'Udate PetrolStation SET isDelete = TRUE WHERE id = $2';
    this.db.query(deleteQuery, [poiId]);
  }
}
