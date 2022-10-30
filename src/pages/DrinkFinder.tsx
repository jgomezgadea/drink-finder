import './DrinkFinder.css';

import React from 'react';

import AppFrame from '../components/AppFrame';
import DrinkList from '../components/DrinkList';
import SearchDrinksBar from '../components/SearchDrinksBar';

const DrinkFinder = () => {
  return (
    <AppFrame>
      <SearchDrinksBar />
      <DrinkList />
    </AppFrame>
  );
};

export default DrinkFinder;
