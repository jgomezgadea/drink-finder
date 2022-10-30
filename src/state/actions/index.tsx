import {DrinkState} from '../interfaces';

/**
 * Enum for the action types
 */
export enum ActionTypes {
  SET_DRINKS = 'SET_DRINKS',
}

/**
 * Define the action types
 */
interface SetDrinksAction {
  type: ActionTypes.SET_DRINKS;
  payload: DrinkState;
}

export type Action = SetDrinksAction; // | AddOtherAction
