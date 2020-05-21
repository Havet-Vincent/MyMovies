import React from 'react';

// == Import components
import {
  Container,
  Toolbar,
  Typography,
  Tooltip,
  Button,
} from '@material-ui/core';

// == Import styles
import footerStyles from './footerStyles';

// == Composant
const Footer = () => {
  const classes = footerStyles();
  return (

    <Container fixed className={classes.footerWrapper}>
      <Toolbar className={classes.footerContent}>
        <Tooltip title="Acceuil" placement="top-start">
          <Button className={classes.footerLink}>Acceuil</Button>
        </Tooltip>
        <Tooltip title="Mentions-légales" placement="top-start">
          <Button className={classes.footerLink}>mentions-légales</Button>
        </Tooltip>
      </Toolbar>
      <Typography variant="body2" color="textSecondary" align="center" className={classes.footerCopyright}>
        {'© MyMovies'}
        {new Date().getFullYear()}
      </Typography>
    </Container > 
  );
};

// == Export 
export default Footer;
