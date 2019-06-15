import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',

    '&.showAccount': {
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        left: '0',
        width: '100%',
        backgroundColor: colors.primary.normal
      }
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
    },

    '.showAccount &': {
      display: 'flex'
    }
  },
  
  passwordPanel: {
    width: '55%',
    margin: '0',
    [theme.breakpoints.only('md')]: {
      width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  
  signupDescription: {
    marginTop: 0,

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