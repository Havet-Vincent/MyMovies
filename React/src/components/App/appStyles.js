import { makeStyles } from '@material-ui/core/styles';

const appStyles = makeStyles(() => ({
  wrapper: {
    minWidth: '100%',
    minHeight: '100vh',
    padding: 0,
    margin: 'auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export default appStyles;
