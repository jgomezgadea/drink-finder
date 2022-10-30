import './DrinkFilter.css';

import {Checkbox, FormControlLabel, FormGroup} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreators, State} from '../../state';
import {FiltersState} from '../../state/interfaces';

const DrinkFilter = () => {
  /*const state = useSelector((state: State) => state.drinks);
  if (state.drinks.length === 0) return null;*/

  const [alcoholic, setAlcoholic] = useState(true);

  /*const dispatch = useDispatch();
  const {setFilters} = bindActionCreators(actionCreators, dispatch);*/

  /*setFilters({
    alcoholic: alcoholic,
    ingredient: [],
    category: [],
    glass: [],
  } as FiltersState);*/

  return (
    <div className="drinkFilter">
      <h2>Filters</h2>
      <FormGroup>
        <FormControlLabel
          className="checkbox"
          control={<Checkbox checked={alcoholic} onChange={() => setAlcoholic(e => !e)} />}
          label="Alcoholic"
        />
      </FormGroup>
    </div>
  );
};

export default DrinkFilter;
