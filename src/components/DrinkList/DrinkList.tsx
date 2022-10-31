import './DrinkList.css';

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {State} from '../../state';
import DrinkItem from '../DrinkItem';

const DrinkList = () => {
  const state = useSelector((state: State) => state.drinks);
  const filters = useSelector((state: State) => state.filters);

  const filteredDrinks = state.drinks
    // Filter by alcoholic / non alcoholic
    .filter(drink => filters.alcoholic ?
      drink.strAlcoholic.toLowerCase() === 'alcoholic'
      : drink.strAlcoholic.toLowerCase() !== 'alcoholic')
    // Filter by ingredient (require to have all ingredients)
    .filter(drink => filters.ingredient.length === 0 ? true
      : filters.ingredient.every(ingredient => drink.strIngredients.includes(ingredient)))
    // Filter by category
    .filter(drink => filters.category.length === 0 ? true
      : filters.category.includes(drink.strCategory))
    // Filter by glass
    .filter(drink => filters.glass.length === 0 ? true
      : filters.glass.includes(drink.strGlass));

  return (
    <div className="drinkList">
      {filteredDrinks.length ? (
        filteredDrinks.map(drink =>
          <DrinkItem drink={drink} key={drink.idDrink} />
        )
      ) : (
        state.drinks.length ? (
          <h3 className="noDrinks">No matching drink found!</h3>
        ) : (
          <h3 className="noDrinks">No drink with that name found!</h3>
        )
      )}
    </div>
  );
};

export default DrinkList;
