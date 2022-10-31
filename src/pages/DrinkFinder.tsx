import './DrinkFinder.css';

import {Grid} from '@material-ui/core';
import React, {FC} from 'react';

import AppFrame from '../components/AppFrame';
import DrinkFilter from '../components/DrinkFilter';
import DrinkList from '../components/DrinkList';
import SearchDrinksBar from '../components/SearchDrinksBar';

const DrinkFinder: FC = () => {
  return (
    <AppFrame>
      <Grid container justifyContent="center">
        <Grid item lg={6} md={8} sm={9} xs={11}>
          <SearchDrinksBar />
        </Grid>
      </Grid>
      <Grid alignItems="flex-start" container justifyContent="center">
        <Grid item lg={2} md={3} sm={4} xs={5}>
          <DrinkFilter />
        </Grid>
        <Grid item lg={10} md={9} sm={8} xs={7}>
          <DrinkList />
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default DrinkFinder;
