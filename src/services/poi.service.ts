import POI from '../models/poi';
import type PoiRepository from '../repositories/poi.repository';

export default class PoiService {
  poiRepository: PoiRepository;

  constructor(poiRepository: PoiRepository) {
    this.poiRepository = poiRepository;
  }

  getPoi(poiId: number) {
    try {
      return this.poiRepository.getPoi(poiId);
    } catch (error: any) {
      new Error(
        `Error occured while getting POI ${poiId}: ${error.stack}`
      );

    }
  }

  createPoi(poi: POI) {
    try {
      this.poiRepository.createPoi(poi);
    } catch (error: any) {
      new Error (
        `Error occured while creating new  POI: ${error.stack}`
      )
    }

  }

  updatePoi(poi: POI) {
    try {
      this.poiRepository.updatePoi(poi);
    } catch (error: any) {
      new Error (
        `Error occured while updating POI: ${poi.id}: ${error.stack}`
      )
    }
  }

  removePoi(poiId: number) {
    try {
      this.poiRepository.removePoi(poiId);
    } catch (error: any) {
      new Error (
        `Error occured while removing POI ${poiId}: ${error.stack}`
      )
    }
  }
}
