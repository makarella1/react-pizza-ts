import { PizzaItem } from './index';

import { PIZZA_DATA } from '../utils/pizzaData';

const PizzaList = () => {
  return (
    <div className="content__items">
      {PIZZA_DATA.map((pizza) => (
        <PizzaItem {...pizza} />
      ))}
    </div>
  );
};
export default PizzaList;
