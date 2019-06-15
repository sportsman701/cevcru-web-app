import colors from 'helpers/colors';
import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    margin: 'auto',

    [theme.breakpoints.only('xs')]: {
      padding: '30px 0'
    },

    '.showAccount &': {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },

  image: {
    width: '100%',
    maxHeight: '250px'
  },

  imageTitle: {
    width: '60%',
    [theme.breakpoints.only('md')]: {
      width: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },

  carouselIndicator: {
    borderRadius: '100%',
    backgroundColor: colors.text.inverse.normal,
    width: '10px',
    height: '10px',
    margin: '0 7px',
    cursor: 'pointer',
    transition: 'all ease 0.5s',

    '&.active': {
      backgroundColor: colors.primary.normal
    },
    '&:hover': {
      backgroundColor: colors.primary.hover
    }
  }
}));