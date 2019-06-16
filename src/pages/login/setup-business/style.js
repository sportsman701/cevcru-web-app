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
    backgroundColor: colors.inverse.normal,
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
    margin: 0
  },

  image: {
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
