import { IPizzaItem } from '../../models';

export interface PizzasSliceState {
  items: IPizzaItem[];
  totalCount: number;
  isLoading: boolean;
  isError: boolean;
}
