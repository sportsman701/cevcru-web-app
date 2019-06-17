import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  title: {
    margin: 0
  },

  description: {
    margin: '30px 0 40px 0'
  },

  incorporatedLLC: {
    marginTop: '40px',

    [theme.breakpoints.only('xs')]: {
      marginTop: '20px'
    }
  }
}));