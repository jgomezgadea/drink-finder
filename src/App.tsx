import './App.css';

import {FC} from 'react';

import DrinkFinder from './pages/DrinkFinder';

const App: FC = () => {
  return (
    <main className="App">
      <DrinkFinder />;
    </main>
  );
};

export default App;
