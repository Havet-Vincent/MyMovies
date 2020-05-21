// == Import npm
import React from 'react';

// == Import components
import { CssBaseline, Container } from '@material-ui/core';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// == Import
import appStyles from './appStyles';

// == Composant
const App = () => {
  const classes = appStyles();
  return (
    <>
    <CssBaseline />
    <Container className={classes.wrapper}> 
      <Header />
      <Footer />
    </Container>
    </>
  );
};


// == Export
export default App;
