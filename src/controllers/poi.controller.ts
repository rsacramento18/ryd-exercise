import { Request, Response } from 'express';
import PoiService from '../services/poi.service';
import PoiRepository from '../repositories/poi.repository';
import pool from '../../postgress';

const poiRepository = new PoiRepository(pool);
const poiService = new PoiService(poiRepository);


function getPoi(req: Request, res: Response) {
  const {id} = req.query
  const poi = poiService.getPoi(Number(id));
  res.send(poi);
}

function createPoi(req: Request, res: Response) {
  res.send('create');
};

function updatePoi(req: Request, res: Response) {
  res.send('udpate');
}

function deletePoi(req: Request, res: Response) {
  res.send('Delete');
};

export {
  getPoi,
  createPoi,
  updatePoi,
  deletePoi
}
