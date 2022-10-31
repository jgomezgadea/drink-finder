import './DrinkList.css';

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {State} from '../../state';
import DrinkItem from '../DrinkItem';

const DrinkList = () => {
  const state = useSelector((state: State) => state.drinks);
  const filters = useSelector((state: State) => state.filters);

  return (
    <div className="drinkList">
      {state.drinks.length ? (
        state.drinks
          // Filter by alcoholic / non alcoholic
          .filter(drink => filters.alcoholic ?
            drink.strAlcoholic.toLowerCase() === 'alcoholic'
            : drink.strAlcoholic.toLowerCase() !== 'alcoholic')
          .map(drink => <DrinkItem drink={drink} key={drink.idDrink} />)
      ) : (
        <h3 className="noDrinks">No matching drink found!</h3>
      )}
    </div>
  );
};

export default DrinkList;
