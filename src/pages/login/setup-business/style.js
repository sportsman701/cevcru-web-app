import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  root: {
    backgroundColor: colors.background.dark,
  },

  leftPanel: {
    backgroundColor: colors.background.light
  },

  rightPanel: {
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  startMainPanel: {
    margin: 'auto',
    padding: '50px',
    borderRadius: '5px',
    boxShadow: '#00000024 13px 4px 20px 0px',
    backgroundColor: colors.inverse.normal,
    transition: 'all ease .5s',

    [theme.breakpoints.only('xs')]: {
      padding: '40px',
      borderRadius: '0',
    }
  },

  topLogo: {
    '& img': {
      filter: 'brightness(10)'
    },

    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      padding: '10px',
      backgroundColor: colors.primary.normal,
      left: 0,
      top: 0
    }
  },

  mainContainer: {
    margin: 'auto 60px',
    width: '100%',
    display: 'flex',

    [theme.breakpoints.only('xs')]: {
      margin: 0
    }
  },

  mainPanel: {
    boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.1)',
    backgroundColor: colors.background.white,
    flexGrow: '1',
    padding: '40px'
  },

  stepContent: {
    margin: 'auto',
    maxWidth: '550px'
  },

  stepList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    textAlign: 'left',
    position: 'relative',
    left: '-25px'
  },

  stepIndicator: {
    display: 'flex',
    alignItems: 'center',

    '& div:first-child': {
      width: '50px',
      height: '50px',
      lineHeight: '30px',
      textAlign: 'center',
      borderRadius: '100%',
      padding: '10px',
      marginRight: '12px',
      border: `1px solid ${colors.text.primary.normal}`,
      backgroundColor: colors.background.white,

      '&.active': {
        border: `1px solid ${colors.background.primary}`,
        backgroundColor: colors.background.primary,
      }
    }
  },

  hand: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'left',

    '& div': {
      marginLeft: '15px'
    }
  },

  content: {
    margin: 'auto',
    width: '450px',
    alignItems: 'center'
  },

  description: {
    margin: 0
  },

  startPreview: {
    margin: '30px 0',
    '& img': {
      width: '100%'
    }
  },

  setupBusiness: {
    maxWidth: '200px',
    width: '100%'
  }
}));
