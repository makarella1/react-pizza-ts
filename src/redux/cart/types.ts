import { ICartItem } from '../../models';

export interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  items: ICartItem[];
}
