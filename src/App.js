import React from 'react';
import './styles/App.css';
import { Provider } from 'react-redux';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes, faPlus, faLocationArrow, faWindowMinimize, faEyeSlash
} from '@fortawesome/free-solid-svg-icons';

// redux store
import Store from './config/store';

// Pages
import Home from './pages/Home';

library.add(faTimes, faPlus, faLocationArrow, faWindowMinimize, faEyeSlash);

const App = () => (
  <Provider store={Store}>
    <Home />
  </Provider>
);

export default App;
