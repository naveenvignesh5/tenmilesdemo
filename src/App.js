import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

// redux store
import Store from './config/store';

// Pages
import Home from './pages/Home';

const App = () => (
  <Provider store={Store}>
    <Home />
  </Provider>
);

export default App;
