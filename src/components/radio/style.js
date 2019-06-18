import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    color: colors.text.primary.normal,

    '&:hover': {
      backgroundColor: `${colors.primary.normal}30`
    },

    '&.Mui-checked': {
      color: colors.primary.normal,

      '&:hover': {
        backgroundColor: `${colors.primary.normal}30`
      },
    }
  },

  caption: {
    color: colors.text.primary.normal
  }
})
