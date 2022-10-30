import {Drink} from '../state/interfaces';

const useFetchDrinks = (searchTerm: string, setDrinks: (drinks: Drink[]) => void) => {
  const fetchDrinks = async () => {
    // TODO Check if formar is valid
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    const data = await response.json();
    for (let d = 0; d < data.drinks.length; d++) {
      data.drinks[d].strIngredients = [];
      for (let i = 1; i <= 15; i++) {
        if (data.drinks[d][`strIngredient${i}`] !== null) {
          data.drinks[d].strIngredients.push(data.drinks[d][`strIngredient${i}`]);
        }
      }
    }
    setDrinks(data.drinks);
  };
  fetchDrinks();
};

export default useFetchDrinks;
