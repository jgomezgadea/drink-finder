import './DrinkList.css';

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {State} from '../../state';
import DrinkItem from '../DrinkItem';

const DrinkList = () => {
  const state = useSelector((state: State) => state.drinks);

  useEffect(() => {
    console.log(state);
  }, [state.searchTerm]);

  return (
    <div className="drinkList">
      {state.drinks.length ? (
        state.drinks
          // Filter by alcoholic / non alcoholic
          //.filter(drink => drink.strAlcoholic.toLowerCase().includes(state.searchTerm.toLowerCase()))
          .map(drink => <DrinkItem drink={drink} key={drink.idDrink} />)
      ) : (
        <h3 className="noDrinks">No matching drink found!</h3>
      )}
    </div>
  );
};

export default DrinkList;
