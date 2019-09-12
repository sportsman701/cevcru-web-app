import { makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';


export default makeStyles(theme => ({
  title: {
    margin: '1em 0'
  },

  accountLogo: {
    border: '1px dotted lightgray',
    borderRadius: 5,
    width: 90,

    [theme.breakpoints.down('sm')]: {
      width: 50
    }
  },

  overview: {
    marginBottom: '2em'
  },

  overviewLeft: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },

  overviewRight: {
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  overviewSpace: {
    marginBottom: '1.5em'
  },

  overviewStamp: {
    maxWidth: 200,
    minWidth: 50,
    marginTop: '2em',

    '& img': {
      width: '100%'
    }
  },

  overviewMeta: {
    display: 'flex',
    justifyContent: 'flex-end',

    '&>div:nth-child(2)': {
      width: 100,

      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        marginTop: '1em'
      }
    },

    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },

  invoiceTable: {
    width: '100%',
    textAlign: 'left',

    '& thead': {
      marginBottom: '1em',

      '& th': {
        borderBottom: '1em solid white'
      }
    }
  },

  itemDescription: {
    color: colors.text.primary.normal,
    fontWeight: 'normal',
    fontSize: 'smaller'
  },

  alignRight: {
    textAlign: 'right',
    height: '2em'
  },

  tableSplit: {
    margin: '0.3em 0',
    marginLeft: 'auto',
    maxWidth: 230,
    width: '100%'
  },

  leftAlign: {
    textAlign: 'left'
  },

  topSpacing: {
    marginTop: '1em'
  },

  paynow: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 300,
      width: '100%',
      margin: 'auto'
    }
  },

  paystack: {
    margin: 'auto',
    marginTop: '1em',
    padding: '1em 1em .7em',
    width: 'min-content',
    border: '1px solid lightgray',
    borderRadius: '3px',
    position: 'relative',

    '& small': {
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      backgroundColor: 'white',
      padding: '0 5px',
      width: 'fit-content',
      top: 0,
      left: '50%'
    }
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& span': {
      marginRight: '2em'
    }
  },

  footerDesc: {
    lineHeight: '1.2em'
  },

  hbarThin: {
    margin: '0.3em 0'
  },

  invoiceSection: {
    maxWidth: 900,
    margin: 'auto',
    width: '100%'
  },

  historyTitle: {
    
  }
}));
