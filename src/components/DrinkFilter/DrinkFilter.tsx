import './DrinkFilter.css';

import {Checkbox, FormControl, FormControlLabel, FormGroup, Paper} from '@material-ui/core';
import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreators, State} from '../../state';
import {FiltersState} from '../../state/interfaces';

// TODO This logic should be modularized

const DrinkFilter = () => {
  const [alcoholicFilter, setAlcoholicFilter] = useState(true);
  const handleAlcoholic = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlcoholicFilter(event.target.checked);
  };

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientsFilter, setIngredientsFilter] = useState<string[]>([]);
  const handleIngredients = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (event.target.checked) {
      setIngredientsFilter([...ingredientsFilter, value]);
    } else {
      setIngredientsFilter(ingredientsFilter.filter(ingredient => ingredient !== value));
    }
  };

  const [category, setCategory] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (event.target.checked) {
      setCategoryFilter([...categoryFilter, value]);
    } else {
      setCategoryFilter(categoryFilter.filter(category => category !== value));
    }
  };

  const [glass, setGlass] = useState<string[]>([]);
  const [glassFilter, setGlassFilter] = useState<string[]>([]);
  const handleGlass = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (event.target.checked) {
      setGlassFilter([...glassFilter, value]);
    } else {
      setGlassFilter(glassFilter.filter(glass => glass !== value));
    }
  };

  const dispatch = useDispatch();
  const {setFilters} = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.drinks);

  useEffect(() => {
    setFilters({
      alcoholic: alcoholicFilter,
      ingredient: ingredientsFilter,
      category: categoryFilter,
      glass: glassFilter,
    } as FiltersState)
    console.log(ingredientsFilter)
  }, [alcoholicFilter, ingredientsFilter,
    categoryFilter, glassFilter, setFilters]);

  useEffect(() => {
    let ingredients: string[] = [];
    let category: string[] = [];
    let glass: string[] = [];
    state.drinks.forEach(drink => {
      ingredients = [...ingredients, ...drink.strIngredients];
      category = [...category, drink.strCategory];
      glass = [...glass, drink.strGlass];
    });
    setIngredients(Array.from(new Set(ingredients)))
    setCategory(Array.from(new Set(category)))
    setGlass(Array.from(new Set(glass)))
    setAlcoholicFilter(true);
    setIngredientsFilter([]);
    setCategoryFilter([]);
    setGlassFilter([]);
  }, [state.searchTerm]);

  return ((state.drinks.length === 0) ? null : (
    <div className="drinkFilter">
      <h2>Filters</h2>
      <FormGroup>
        <Paper>
          <FormControlLabel
            className="checkboxList"
            control={<Checkbox checked={alcoholicFilter} onChange={handleAlcoholic} />}
            label="Alcoholic"
          />
        </Paper>
      </FormGroup>
      <h4>Ingredients</h4>
      <Paper className='paper' style={{ maxHeight: 250, overflow: 'auto', minWidth: "min-content" }}>
        <FormGroup>
          {ingredients.map(ingredient => (
          <FormControlLabel key={ingredient}
            control={<Checkbox onChange={(e) => handleIngredients(e, ingredient)} />}
            label={ingredient} className="checkboxList" />
        ))}
        </FormGroup>
      </Paper>
      
      <h4>Category</h4>
      <Paper className='paper' style={{ maxHeight: 250, overflow: 'auto', minWidth: "min-content" }}>
        <FormGroup>
          {category.map(cat => (
          <FormControlLabel key={cat}
            control={<Checkbox onChange={(e) => handleCategory(e, cat)} />}
            label={cat} className="checkboxList" />
        ))}
        </FormGroup>
      </Paper>
      
      <h4>Glass</h4>
      <Paper className='paper' style={{ maxHeight: 250, overflow: 'auto', minWidth: "min-content" }}>
        <FormGroup>
          {glass.map(gl => (
          <FormControlLabel key={gl}
            control={<Checkbox onChange={(e) => handleGlass(e, gl)} />}
            label={gl} className="checkboxList" />
        ))}
        </FormGroup>
      </Paper>
    </div>
  ));
};

export default DrinkFilter;
