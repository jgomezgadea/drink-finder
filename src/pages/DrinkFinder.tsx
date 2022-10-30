import './DrinkFinder.css';

import React, {FC} from 'react';

import AppFrame from '../components/AppFrame';
import DrinkList from '../components/DrinkList';
import SearchDrinksBar from '../components/SearchDrinksBar';

const DrinkFinder: FC = () => {
  return (
    <AppFrame>
      <SearchDrinksBar />
      <DrinkList />
    </AppFrame>
  );
};

export default DrinkFinder;
