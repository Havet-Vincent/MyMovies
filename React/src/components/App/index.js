// == Import npm
import React from 'react';

// == Import components
import { CssBaseline, Container } from '@material-ui/core';

import Header from 'src/components/Header';
import SignUp from 'src/components/SignUp';
import Footer from 'src/components/Footer';

// == Import
import appStyles from './appStyles';

// == Composant
const App = () => {
  const classes = appStyles();
  return (
    <>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Container className={classes.wrapper}> 
      <Header />
      <SignUp />
      <Footer />
    </Container>
    </>
  );
};


// == Export
export default App;
