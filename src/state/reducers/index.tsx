import {combineReducers} from 'redux';

import drinksReducer from './drinksReducer';

const reducers = combineReducers({
  drinks: drinksReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
