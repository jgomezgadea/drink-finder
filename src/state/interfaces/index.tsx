export interface DrinkState {
  drinks: Drink[];
  searchTerm: string;
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strCategory: string;
  strInstructions: string;
  strIngredients: [string];
}

export interface DrinkDispatch {
  fetchDrinks: (searchTerm: string) => void;
}
