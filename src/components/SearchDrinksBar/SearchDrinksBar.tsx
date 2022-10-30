import SearchBar from 'material-ui-search-bar';
import React, {FC, useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import useFetchDrinks from '../../hooks/useFetchDrinks';
import {actionCreators} from '../../state';

const SearchDrinksBar: FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [findTerm, setFindTerm] = React.useState('');

  const dispatch = useDispatch();
  const {setDrinks} = bindActionCreators(actionCreators, dispatch);

  useMemo(() => {
    useFetchDrinks(findTerm, setDrinks);
  }, [findTerm, setDrinks]);

  return (
    <SearchBar
      onCancelSearch={() => {
        setSearchTerm('');
        setFindTerm('');
      }}
      onChange={t => setSearchTerm(t)}
      onRequestSearch={() => setFindTerm(searchTerm)}
      placeholder="Search for a drink ..."
    />
  );
};

export default React.memo(SearchDrinksBar);
