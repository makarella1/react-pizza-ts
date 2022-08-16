import { IPizzaItem } from '../../models';

export interface PizzaSliceState {
  item: IPizzaItem;
  isLoading: boolean;
  isError: boolean;
}
