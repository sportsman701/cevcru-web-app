import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    padding: '12px',
    backgroundColor: colors.primary.normal,
    transition: 'background-color ease .5s',
    boxShadow: 'none',
    color: colors.inverse.highlight,

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

  icon: {
    margin: '0 10px 0 0'
  },

  grayText: {
    color: `${colors.text.primary.gray} !important`
  },

  inverse: {
    backgroundColor: colors.inverse.normal,
    color: colors.text.primary.primary,

    '&:hover': {
      backgroundColor: colors.inverse.hover
    }
  }
})
