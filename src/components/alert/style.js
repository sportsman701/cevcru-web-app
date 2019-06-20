import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  root: {
    backgroundColor: colors.status.success,
    justifyContent: 'center',
    
    '&.fail': {
      backgroundColor: colors.status.error
    },
  },
  
  message: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',

    '& .icon': {
      marginRight: '10px'
    }
  }
}));
