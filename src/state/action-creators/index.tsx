import {Dispatch} from 'redux';

import {Action, ActionTypes} from '../actions';
import {Drink} from '../interfaces';

export const setDrinks = (drinks: Drink[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SET_DRINKS,
      payload: drinks,
    });
  };
};
