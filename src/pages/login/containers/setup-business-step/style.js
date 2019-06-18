import makeStyles from '@material-ui/styles/makeStyles';

export default makeStyles(theme => ({
  topImage: {
    marginBottom: '20px'
  },

  title: {
    margin: 0
  },

  description: {
    margin: '30px 0'
  },

  incorporatedLLC: {
    marginTop: '40px',

    [theme.breakpoints.only('xs')]: {
      marginTop: '20px'
    }
  },

  referralDescription: {
    margin: '10px 0 0',
    textAlign: 'left',
    lineHeight: '1'
  },

  fieldDescription: {
    margin: '0 0 5px',
    textAlign: 'left',
    lineHeight: '1'
  },

  onlinePayment: {
    textAlign: 'left'
  },

  teamSize: {
    marginTop: '10px',
    
    '& div': {
      flexGrow: 0,
      
      [theme.breakpoints.down('sm')]: {
        'maxWidth': '33.33%',
        'flexBasis': '33.33%'
      },
      
      [theme.breakpoints.up('md')]: {
        'maxWidth': '20%',
        'flexBasis': '20%'
      }
    }
  }
}));