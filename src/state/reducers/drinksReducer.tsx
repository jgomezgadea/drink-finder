import {Action, ActionTypes} from '../actions';
import {DrinkState} from '../interfaces';

const initialState = {
  drinks: [],
  searchTerm: '',
} as DrinkState;

const drinksReducer = (state: DrinkState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_DRINKS:
      return {
        ...state,
        drinks: action.payload.drinks,
        searchTerm: action.payload.searchTerm,
      };
    default:
      return state;
  }
};

export default drinksReducer;
