import React from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredient.css';

const BurgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case 'bread-bottom':
      return (ingredient = <div className='BreadBottom'></div>);
    case 'bread-top':
      return (ingredient = (
        <div className='BreadTop'>
          <div className='Seeds1'></div>
          <div className='Seeds2'></div>
        </div>
      ));
    case 'meat':
      return (ingredient = <div className='Meat'></div>);

    case 'cheese':
      return (ingredient = <div className='Cheese'></div>);
    case 'salad':
      return (ingredient = <div className='Salad'></div>);
    case 'bacon':
      return (ingredient = <div className='Bacon'></div>);
    default:
      ingredient = null;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
