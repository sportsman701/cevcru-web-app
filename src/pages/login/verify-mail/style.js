import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  root: {
    backgroundColor: colors.primary.dark,
  },

  mainPanel: {
    margin: 'auto',
    padding: '50px',
    borderRadius: '5px',
    boxShadow: '#00000024 13px 4px 20px 0px',
    backgroundColor: colors.primary.normal,
    transition: 'all ease .5s',

    [theme.breakpoints.only('xs')]: {
      padding: '40px',
      borderRadius: '0',
    }
  },

  content: {
    margin: 'auto',
    width: '450px',
    alignItems: 'center'
  },

  description: {
    width: '80%',

    [theme.breakpoints.only('xs')]: {
      width: '100%'
    }
  },

  resendEmail: {
    marginLeft: '10px'
  },

  verificationCode: {
    margin: '0 !important',
    width: '60%',

    [theme.breakpoints.only('xs')]: {
      maxWidth: '250px',
      width: '100%'
    }
  },

  haveIssue: {
    marginTop: '30px',
    '&>small:first-child': {
      margin: '0 10px 0'
    }
  },

  dockedAlert: {
    position: 'relative',
    width: 'calc(100% + 100px)',

    display: 'block',
    left: '-50px',
    top: '-50px',

    '& .MuiSnackbarContent-root': {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  }
}));