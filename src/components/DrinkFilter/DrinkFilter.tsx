import './DrinkFilter.css';

import {Checkbox, FormControlLabel, FormGroup} from '@material-ui/core';
import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreators, State} from '../../state';
import {FiltersState} from '../../state/interfaces';

const DrinkFilter = () => {
  const [alcoholic, setAlcoholic] = useState(false);
  const handleAlcoholic = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlcoholic(event.target.checked);
  };

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [glass, setGlass] = useState<string[]>([]);

  const dispatch = useDispatch();
  const {setFilters} = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.drinks);

  useEffect(() => {
    setFilters({
      alcoholic: alcoholic,
      ingredient: [],
      category: [],
      glass: [],
    } as FiltersState)
  }, [alcoholic, setFilters]);

  /* useEffect(() => {
    state.drinks.forEach(element => {
      
    });
    setIngredients
 */


  return ((state.drinks.length === 0) ? null : (
    <div className="drinkFilter">
      <h2>Filters</h2>
      <FormGroup>
        <FormControlLabel
          className="checkbox"
          control={<Checkbox checked={alcoholic} onChange={handleAlcoholic} />}
          label="Alcoholic"
        />
      </FormGroup>
      <FormGroup>

      </FormGroup>
    </div>
  ));
};

export default DrinkFilter;
