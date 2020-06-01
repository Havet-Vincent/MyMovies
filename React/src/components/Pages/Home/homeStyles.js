import { makeStyles } from '@material-ui/core/styles';

const homeStyles = makeStyles((theme) => ({

  content: {
    padding: theme.spacing(8, 0, 6),
    marginTop: '70px',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    width: 200,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    width: 200,
  },
  cardContent: {
    flexGrow: 1,
    hover: 'black',
  },
  playIcon: {
    height: 38,
    width: 38,
  },

}));

export default homeStyles;
