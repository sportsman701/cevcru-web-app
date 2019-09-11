import { makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';

export default makeStyles(theme => ({
  root: {
    backgroundColor: colors.snackbar.info,
    borderRadius: '0.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  content: {
    padding: '1em 0 1em 1em',
    textAlign: 'left',

    [theme.breakpoints.only('xs')]: {
      fontSize: 'smaller'
    }
  },

  closeButton: {
    fontSize: '2em',
    cursor: 'pointer',
    minWidth: '40px',

    '&:hover': {
      color: colors.primary.hover
    }
  }
}));
