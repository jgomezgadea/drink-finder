import {DrinkState, FiltersState} from '../interfaces';

/**
 * Enum for the action types
 */
export enum ActionTypes {
  SET_DRINKS = 'SET_DRINKS',
  SET_FILTERS = 'SET_FILTERS',
}

/**
 * Define the action types
 */
interface SetDrinksAction {
  type: ActionTypes.SET_DRINKS;
  payload: DrinkState;
}

interface SetFiltersAction {
  type: ActionTypes.SET_FILTERS;
  payload: FiltersState;
}

export type Action = SetDrinksAction | SetFiltersAction;
