import {createTheme, ThemeProvider} from '@material-ui/core';
import {FC} from 'react';

import DrinkFinder from './pages/DrinkFinder';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {main: '#433775'},
    secondary: {main: '#e3784b'},
    background: {default: '#e4e4e4'},
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <DrinkFinder />
    </ThemeProvider>
  );
};

export default App;
