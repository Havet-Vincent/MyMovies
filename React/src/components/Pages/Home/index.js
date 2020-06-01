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
  Box,
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Img from 'src/assets/images/5gJOu3t2QrznuJqjCG7FQDMI76t.jpg';

// == Import styles
import homeStyles from './homeStyles';

const cards = [1, 2, 3, 4];


// == Composant
const Home = ({
  getRegionsData,
  getCategoriesData,
}) => {
  const classes = homeStyles();

  return (
    <>
      <main>
        <Container maxWidth="sm" className={classes.content}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Mes Médias
        </Typography>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* films unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Films"
                    image={Img}
                    title="Films"
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Films
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

        
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Films"
                    image={Img}
                    title="Films"
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Films Ginette
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Films"
                    image={Img}
                    title="Films"
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Séries
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Films"
                    image={Img}
                    title="Films"
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Séries Ginette
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Films"
                    image={Img}
                    title="Films"
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Musiques
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Films"
                    image={Img}
                    title="Films"
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      Photos
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>

          </Grid>
        </Container>   
      </main>
    </>
  );
};

// == Export
export default Home;
