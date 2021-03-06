import { makeStyles } from '@material-ui/core/styles';

const footerStyles = makeStyles((theme) => ({

  footerWrapper: {
    maxWidth: '100%',
    backgroundColor: '#3f51b5',
    padding: '1.5rem 0 .5rem 1rem',
  },
  footerContent: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
    },
  },
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
  },
  footerLink: {
    display: 'inline-block',
    fontSize: '.8em',
    color: '#3a3a3a',
    '&:hover': {
      color: '#F7F9FA',
      textDecorationLine: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
  },

  footerCopyright: {
    fontSize: '.85em',
    color: '#fff',
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      marginTop: theme.spacing(2.5),
    },
  },
  
}));

export default footerStyles;
