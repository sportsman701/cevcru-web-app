import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  title: {
    margin: '1em 0',
    fontWeight: 'normal'
  },

  accountLogo: {
    border: '1px dotted lightgray',
    borderRadius: 5
  },

  overview: {
    marginBottom: '2em'
  },

  overviewLeft: {
    textAlign: 'left'
  },

  overviewRight: {
    textAlign: 'right'
  },

  overviewStamp: {
    maxWidth: 200,
    marginTop: '2em',

    '& img': {
      width: '100%'
    }
  },

  overviewMeta: {
    display: 'flex',
    justifyContent: 'flex-end',

    [theme.breakpoints.up('sm')]: {
      '&>div:nth-child(2)': {
        width: 100
      }
    },

    [theme.breakpoints.only('xs')]: {
      display: 'block'
    }
  }
}));
