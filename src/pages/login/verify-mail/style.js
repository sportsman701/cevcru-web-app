import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';
import color from '@material-ui/core/colors/deepPurple';

export default makeStyles(theme => ({
  root: {
    backgroundColor: colors.primary.dark,
    
    [theme.breakpoints.down('sm')]: {
      backgroundColor: colors.primary.normal
    }
  },

  mainPanel: {
    margin: 'auto 40px'
  }
}));