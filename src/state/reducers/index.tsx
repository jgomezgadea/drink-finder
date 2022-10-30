import {combineReducers} from 'redux';

import drinksReducer from './drinksReducer';
import filtersReducer from './filtersReducer';

const reducers = combineReducers({
  drinks: drinksReducer,
  filters: filtersReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
