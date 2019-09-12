import { makeStyles  } from '@material-ui/styles';
import colors from 'helpers/colors';


export default makeStyles(theme => ({
  fullHeight: {
    minHeight: '100vh',
    display: 'flex',
  },

  fullWidth: {
    position: 'absolute',
    left: '0',
    width: '100%'
  },

  formPanel: {
    display: 'flex',
    flexDirection: 'column',

    '& .MuiFormControl-root': {
      margin: '0.5em 0'
    }
  },

  textTitle: {
    fontSize: '25px',
    fontWeight: 'bold',

    [theme.breakpoints.only('xs')]: {
      fontSize: '18px'
    }
  },

  section: {
    backgroundColor: colors.background.white,
    boxShadow: '0px 1.5px 7px #00000007',
    borderRadius: 5,
    padding: '2em',

    [theme.breakpoints.only('xs')]: {
      padding: 0
    }
  },

  hbar: {
    border: `1px solid ${colors.primary.normal}`,
    margin: '1.5em 0'
  },

  textTitleFixed: {
    fontSize: '25px',
    fontWeight: 'bold',
  },

  textSubTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },

  textSizeA: {
    fontSize: '34px',
  },

  textSizeB: {
    fontSize: '30px',
  },

  textSizeC: {
    fontSize: '25px'
  },

  textSizeD: {
    fontSize: '20px',
  },

  textXLarge: {
    fontSize: '1.5em'
  },

  textLarge: {
    fontSize: 'larger'
  },

  textSmall: {
    fontSize: 'smaller'
  },

  textPrimary: {
    color: colors.text.primary.primary
  },

  textContrast: {
    color: colors.text.primary.contrast
  },

  textNormal: {
    color: colors.text.primary.normal
  },

  textLight: {
    color: colors.text.primary.light
  },

  textGray: {
    color: colors.text.primary.gray
  },

  textGreen: {
    color: colors.text.primary.green
  },

  textInverseNormal: {
    color: colors.text.inverse.normal
  },

  textInverseHighlight: {
    color: colors.text.inverse.highlight
  }
}));