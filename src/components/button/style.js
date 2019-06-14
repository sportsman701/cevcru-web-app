import makeStyles from '@material-ui/core/styles/makeStyles';
import color from 'color';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    padding: '12px',
    backgroundColor: colors.primary,
    transition: 'background-color ease .5s',
    boxShadow: 'none',
    color: 'white',

    '&:hover': {
      backgroundColor: color(colors.primary).lighten(0.1).string()
    },

    '&:focus': {
      boxShadow: 'none'
    }
  },
  
  label: {
    textTransform: 'none'
  },

  outlined: {
    backgroundColor: 'white',
    color: colors.primary,

    '&:hover': {
      backgroundColor: color('white').darken(0.1).string()
    }
  }
})
