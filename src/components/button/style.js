import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    padding: '12px',
    backgroundColor: colors.primary.normal,
    transition: 'background-color ease .5s',
    boxShadow: 'none',
    color: colors.white.normal,

    '&:hover': {
      backgroundColor: colors.primary.hover
    },

    '&:focus': {
      boxShadow: 'none'
    }
  },
  
  label: {
    textTransform: 'none'
  },

  outlined: {
    backgroundColor: colors.white.normal,
    color: colors.primary.normal,

    '&:hover': {
      backgroundColor: colors.white.hover
    }
  }
})
