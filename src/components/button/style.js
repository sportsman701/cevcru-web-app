import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    padding: '12px',
    backgroundColor: colors.primary.normal,
    transition: 'all ease .5s',
    boxShadow: 'none',
    color: colors.text.inverse.highlight,

    '&:hover': {
      backgroundColor: colors.primary.hover
    },

    '&:focus': {
      boxShadow: 'none'
    },

    '&.Mui-disabled': {
      backgroundColor: '#EEE'
    }
  },
  
  label: {
    textTransform: 'none'
  },

  icon: {
    margin: '0 10px 0 0'
  },

  grayText: {
    border: `2px solid ${colors.text.primary.light}`,
    backgroundColor: colors.inverse.normal,
    color: colors.text.primary.gray,

    '&:hover': {
      backgroundColor: colors.text.primary.light
    }
  },

  inverse: {
    border: `2px solid ${colors.primary.normal}`,
    backgroundColor: colors.inverse.normal,
    color: colors.text.primary.primary,

    '&:hover': {
      backgroundColor: colors.inverse.hover
    }
  }
})
