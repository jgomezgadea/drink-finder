import {Dispatch} from 'redux';

import {Action, ActionTypes} from '../actions';
import {DrinkState, FiltersState} from '../interfaces';

export const setDrinks = (drinks: DrinkState) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SET_DRINKS,
      payload: drinks,
    });
  };
};

export const setFilters = (filters: FiltersState) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SET_FILTERS,
      payload: filters,
    });
  };
};
