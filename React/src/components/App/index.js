// == Import npm
import React from 'react';

// == Import components
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from 'src/components/Header';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <CssBaseline />
    <Header />
  </div>
);

// == Export
export default App;
