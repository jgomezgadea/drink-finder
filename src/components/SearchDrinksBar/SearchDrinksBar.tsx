import SearchBar from 'material-ui-search-bar';
import React, {FC, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

import useFetchDrinks from '../../hooks/useFetchDrinks';
import {actionCreators, State} from '../../state';

const SearchDrinksBar: FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [findTerm, setFindTerm] = React.useState('');

  const dispatch = useDispatch();
  const {setDrinks} = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    useFetchDrinks(findTerm, setDrinks);
  }, [findTerm, setDrinks]);

  const state = useSelector((state: State) => state.drinks);

  return (
    <SearchBar
      onChange={t => setSearchTerm(t)}
      onRequestSearch={() => setFindTerm(searchTerm)}
      placeholder="Search for a drink ..."
    />
  );
};

export default React.memo(SearchDrinksBar);
