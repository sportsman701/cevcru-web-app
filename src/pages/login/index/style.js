import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',

    '&.blueScreen': {
      position: 'absolute',
      left: '0',
      width: '100%',
      backgroundColor: colors.primary.normal
    }
  },

  mainPanel: {
    margin: 'auto 40px'
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
  
  phone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    '&>div:first-child': {
      marginRight: '10px',
      width: '100px'
    },

    '&>div:last-child': {

    }
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
    width: '70%',

    [theme.breakpoints.only('md')]: {
      width: '100%'
    },

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
  }
}));