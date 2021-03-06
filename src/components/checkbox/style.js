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
  },

  label: {
    textTransform: 'none'
  },

  button: {
    padding: '3px',
    color: colors.text.primary.contrast,
    border: `1px solid ${colors.text.primary.normal}`,

    '&.MuiButton-contained': {
      border: `1px solid ${colors.text.primary.primary}`,
      color: colors.text.inverse.highlight
    }
  }
})
