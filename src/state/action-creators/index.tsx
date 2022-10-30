import {Dispatch} from 'redux';

import {Action, ActionTypes} from '../actions';
import {DrinkState} from '../interfaces';

export const setDrinks = (drinks: DrinkState) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SET_DRINKS,
      payload: drinks,
    });
  };
};
