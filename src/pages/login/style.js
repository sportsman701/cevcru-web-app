import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
  },

  mainPanel: {
    margin: 'auto'
  },

  leftPanel: {
    backgroundColor: colors.primary.normal,
    boxShadow: '#00000024 13px 4px 20px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px'
  },

  passwordPanel: {
    width: '50%',
    margin: '0',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },

  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px'
  },

  image: {
    height: '250px'
  },

  carouselIndicator: {
    borderRadius: '100%',
    backgroundColor: colors.text.inverse.normal,
    width: '10px',
    height: '10px',
    margin: '0 7px',
    cursor: 'pointer',
    transition: 'background-color ease 0.5s',

    '&.active': {
      backgroundColor: colors.primary.normal
    },
    '&:hover': {
      backgroundColor: colors.primary.hover
    }
  }
}));