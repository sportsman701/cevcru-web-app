import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    textDecoration: 'none',
    transition: 'all ease .5s',
    color: colors.link.primary.normal,
    cursor: 'pointer',

    '&:hover': {
      color: colors.link.primary.hover
    },

    '&:focus': {
      color: colors.link.primary.active
    }
  },

  inverse: {
    color: colors.link.inverse.normal,

    '&:hover': {
      color: colors.link.inverse.hover
    },

    '&:focus': {
      color: colors.link.inverse.active
    }
  }
})
