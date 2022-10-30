import {Action, ActionTypes} from '../actions';
import {FiltersState} from '../interfaces';

const initialState = {
  alcoholic: false,
  ingredient: [],
  category: [],
  glass: [],
} as FiltersState;

const drinksReducer = (state: FiltersState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_FILTERS:
      return {
        ...state,
        alcoholic: action.payload.alcoholic,
        ingredient: action.payload.ingredient,
        category: action.payload.category,
        glass: action.payload.glass,
      };
    default:
      return state;
  }
};

export default drinksReducer;
