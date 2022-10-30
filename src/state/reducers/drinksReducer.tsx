import {Action, ActionTypes} from '../actions';
import {Drink, DrinkState} from '../interfaces';

const initialState = {drinks: [] as Drink[]};

const drinksReducer = (state: DrinkState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };
    default:
      return state;
  }
};

export default drinksReducer;
