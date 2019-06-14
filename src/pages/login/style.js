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
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px',
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },

    '.showForm &': {
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
  
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    margin: 'auto',

    '.showForm &': {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },

  image: {
    height: '250px'
  },

  imageTitle: {
    width: '50%',
    [theme.breakpoints.only('md')]: {
      width: '70%'
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
    transition: 'background-color ease 0.5s',

    '&.active': {
      backgroundColor: colors.primary.normal
    },
    '&:hover': {
      backgroundColor: colors.primary.hover
    }
  }
}));