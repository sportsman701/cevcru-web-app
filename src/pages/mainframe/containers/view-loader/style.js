import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  logo: {
    marginBottom: '3em'
  },

  statusShower: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  statusContainer: {
    margin: 'auto'
  },

  viewContainer: {
    height: '100%',
    padding: '1.5em 3em',
    display: 'none',
    fontSize: 14,

    '&.show': {
      display: 'block'
    },

    [theme.breakpoints.only('xs')]: {
      padding: '0.7em',
      fontSize: 12
    }
  }
}));
