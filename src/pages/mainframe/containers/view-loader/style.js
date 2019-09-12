import { makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';


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
    minHeight: '100%',
    padding: '1.5em 3em',
    display: 'none',
    fontSize: 14,
    backgroundColor: colors.background.lightBlue,

    '&.show': {
      display: 'block'
    },

    [theme.breakpoints.only('xs')]: {
      padding: '1.5em',
      fontSize: 12,
      paddingBottom: 'calc(1.5em + 60px)',
      backgroundColor: colors.background.white
    }
  }
}));
