import { GeoLocation } from './geo-location';
import { WorkingHours } from './working-hours';

export interface StoreInfo {
  geoLocation: GeoLocation;
  id: string;
  minOrderPrice: number;
  rate: number;
  status: string;
  userPoint: number;
  workingHours: WorkingHours[];
}
