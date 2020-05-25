// == Import npm
import React from 'react';


// == Import components
import {
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
  CssBaseline,
  Container,
  IconButton,
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Img from 'src/assets/images/5gJOu3t2QrznuJqjCG7FQDMI76t.jpg';

// == Import styles
import homeStyles from './homeStyles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// == Composant
const Home = ({
  getRegionsData,
  getCategoriesData,
}) => {
  const classes = homeStyles();

  return (
    <>
      <main>
        <CssBaseline />
        <Container maxWidth="sm" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Films
        </Typography>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* film unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Gladiator"
                    image={Img}
                    title="gladiator"
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Gladiator
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>                 
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>   
      </main>
    </>
  );
};

// == Export
export default Home;
