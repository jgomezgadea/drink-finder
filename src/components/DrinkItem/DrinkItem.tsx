import './DrinkItem.css';

import {Box, Card, CardContent, CardMedia, Modal} from '@material-ui/core';
import React, {useState} from 'react';

import {Drink} from '../../state/interfaces';

const DrinkItem = ({drink}: {drink: Drink}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card className="cardDrink" onClick={() => setOpenModal(true)}>
        <CardMedia className="media" image={drink.strDrinkThumb} />
        <CardContent className="content">
          <h2>{drink.strDrink}</h2>
          <hr></hr>
          <h4>Ingredients</h4>
          <ul>
            {Array.from(new Set(drink.strIngredients)).map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <hr></hr>
          <p>{drink.strAlcoholic}</p>
          <p>{drink.strCategory}</p>
          <p>{drink.strGlass}</p>
        </CardContent>
      </Card>
      <Modal onClose={() => setOpenModal(false)} open={openModal}>
        <Box className="modal">
          <h1>{drink.strDrink}</h1>
          <img alt={drink.strDrink} src={drink.strDrinkThumb} />
          <h4>Ingredients</h4>
          <ul>
            {Array.from(new Set(drink.strIngredients)).map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p>{drink.strInstructions}</p>
        </Box>
      </Modal>
    </>
  );
};

export default DrinkItem;
