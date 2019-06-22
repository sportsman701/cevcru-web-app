import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';
import backLogo from 'resources/logo/logo.svg';


const mainPanelMinHeight = '720px';

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
    justifyContent: 'space-between',
    minHeight: mainPanelMinHeight,

    [theme.breakpoints.only('xs')]: {
      display: 'none'
    }
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

  logoHeader: {    
    position: 'fixed',
    display: 'flex',
    zIndex: 1,
    left: 0,
    top: 0,
    
    [theme.breakpoints.only('xs')]: {
      position: 'static',
      backgroundColor: colors.background.white,
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',

      '& img': {
        height: '40px'
      }
    }
  },

  logo: {
    display: 'flex',
    padding: '10px 20px',
    backgroundColor: colors.primary.normal,

    '& img': {
      filter: 'brightness(100)'
    },

    [theme.breakpoints.only('xs')]: {
      '& img': {
        height: '40px'
      }
    }
  },

  mainContainer: {
    margin: 'auto 0 auto 60px',
    width: '100%',
    display: 'flex',

    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      margin: 0
    }
  },

  mainPanel: {
    boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.1)',
    backgroundColor: colors.background.white,
    flexGrow: '1',
    padding: '40px',
    minHeight: mainPanelMinHeight,

    [theme.breakpoints.up('lg')]: {
      backgroundImage: `url('${backLogo}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: 'center',
      backgroundPositionX: 'calc(100% + 160px)',
    },

    [theme.breakpoints.only('xs')]: {
      boxShadow: 'none',
      padding: '20px'
    }
  },

  stepContent: {
    margin: 'auto',
    maxWidth: '550px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  stepList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '100px 0',
    textAlign: 'left',
    position: 'relative',
    width: '30%',
    minWidth: '180px',
    left: '-25px',

    [theme.breakpoints.only('xs')]: {
      display: 'none'
    }
  },

  navigation: {
    [theme.breakpoints.only('xs')]: {
      marginTop: '20px'
    },

    '& div:first-child': {
      display: 'flex',
      alignItems: 'center',

      '& span': {
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px'
      }
    }
  },

  stepIndicator: {
    display: 'flex',
    alignItems: 'center',

    '& div:first-child': {
      minWidth: '50px',
      height: '50px',
      lineHeight: '30px',
      textAlign: 'center',
      borderRadius: '100%',
      padding: '10px',
      marginRight: '12px',
      border: `1px solid ${colors.text.primary.normal}`,
      backgroundColor: colors.background.white,
      transition: 'background-color ease .5s',

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
