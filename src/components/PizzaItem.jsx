import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addItem } from '../redux/slices/cartSlice';

import { MdOutlineAdd } from 'react-icons/md';

const PizzaItem = ({
  name = '',
  imageUrl = '',
  price = 0,
  types = [],
  sizes = [],
  id = 0,
}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [pizzasCount, setPizzasCount] = useState(0);

  const dispatch = useDispatch();

  const addPizzaHandler = () => {
    const pizzaItem = {
      name,
      imageUrl,
      price,
      type: types[activeType],
      size: sizes[activeSize],
      id,
    };

    dispatch(addItem(pizzaItem));

    setPizzasCount((prevState) => (prevState += 1));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={name} />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, index) => (
            <li
              className={`${activeType === index ? 'active' : ''}`}
              onClick={() => setActiveType(index)}
              key={index}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              className={`${activeSize === index ? 'active' : ''}`}
              onClick={() => setActiveSize(index)}
              key={index}
            >{`${size} см.`}</li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">від {price} ₴</div>
        <button
          className="button button--outline button--add"
          onClick={addPizzaHandler}
        >
          <MdOutlineAdd />
          <span>Додати</span>
          {pizzasCount > 0 && <i>{pizzasCount}</i>}
        </button>
      </div>
    </div>
  );
};
export default PizzaItem;
