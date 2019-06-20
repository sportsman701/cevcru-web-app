import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  blueScreen: {
    backgroundColor: colors.primary.normal
  },

  mainPanel: {
    margin: 'auto 40px'
  },

  title: {
    [theme.breakpoints.up('md')]: {
      marginTop: '0'
    }
  },

  account: {
    backgroundColor: colors.primary.normal,
    boxShadow: '#00000024 13px 4px 20px 0px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px',
    margin: 'auto',
    display: 'none',
    transition: 'all ease .5s',

    '.showAccount &': {
      display: 'flex'
    },

    '&.keepMobileStyle': {
      backgroundColor: colors.inverse.normal,
      borderRadius: '7px',
      maxWidth: '350px',
      padding: '20px 15px'
    },

    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },

    [theme.breakpoints.down('sm')]: {
      backgroundColor: colors.inverse.normal,
      borderRadius: '7px',
    },

    [theme.breakpoints.only('sm')]: {
      maxWidth: '400px',
      padding: '30px'
    },

    [theme.breakpoints.only('xs')]: {
      maxWidth: '350px',
      padding: '20px 15px'
    }
  },
  
  invalidCredential: {
    margin: '3px 0',
    color: `${colors.status.error}`
  },

  phone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    '&>div:first-child': {
      marginRight: '10px',
      width: '100px'
    },

    '&>div:last-child': {
      flexGrow: 1
    }
  },
  
  or: {
    margin: '3px 0'
  },

  loader: {
    minHeight: '20px',
  },

  passwordPanel: {
    width: '65%',
    margin: '0',

    '.keepMobileStyle &': {
      width: '100%'
    },

    [theme.breakpoints.only('md')]: {
      width: '80%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  
  signupDescription: {
    margin: '0 auto',
    marginBottom: '10px',
    width: '100%',

    [theme.breakpoints.only('sm')]: {
      margin: '0 auto 15px',
      width: '70%'
    }
  },

  forgotPassword: {
    margin: '10px 0',

    [theme.breakpoints.down('sm')]: {
      order: 2
    }
  },

  loginWithGoogle: {
    [theme.breakpoints.down('sm')]: {
      order: 3
    }
  },

  dontHaveAccount: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    
    '.keepMobileStyle &': {
      justifyContent: 'space-evenly',
      order: 0
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-evenly',
      order: 1
    }
  },

  termPrivacy: {
    margin: '20px auto',
    
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  },

  dockedAlert: {
    position: 'relative',
    top: '-20px',
    left: '0',
    width: 'calc(100% + 30px)',

    '& .MuiCollapse-container': {
      width: '100%'
    },

    '& .MuiSnackbarContent-root': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  }
}));