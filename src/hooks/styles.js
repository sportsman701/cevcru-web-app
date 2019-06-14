import { makeStyles  } from '@material-ui/styles';
import colors from 'helpers/colors';


export default makeStyles({
  formPanel: {
    display: 'flex',
    flexDirection: 'column',

    '& .MuiFormControl-root': {
      margin: '0.5em 0'
    }
  },

  textNormal: {
    color: colors.text.textNormal
  },

  textLight: {
    color: colors.text.light
  },

  textGray: {
    color: colors.text.gray
  },

  textPrimaryNormal: {
    color: colors.text.primaryNormal
  },

  texrtPrimaryHighlight: {
    color: colors.text.primaryHighlight
  }
});