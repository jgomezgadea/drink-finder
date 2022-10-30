export interface DrinkState {
  drinks: Drink[];
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strIngredients: [string];
}

export interface DrinkDispatch {
  fetchDrinks: (searchTerm: string) => void;
}
