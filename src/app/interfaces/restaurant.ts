import { Images } from './images';
import { StoreInfo } from './store-info';
export interface Restaurant {
  id: number;
  title: string;
  text: string;
  type: string;
  images: Images;
  location: object;
  isDinner: boolean;
  isDelivery: boolean;
  storeInfo: StoreInfo;
  categoryId: string;
  imagePath: string;
}
