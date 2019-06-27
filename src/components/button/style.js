import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    padding: '12px',
    backgroundColor: colors.primary.normal,
    transition: 'all ease .5s',
    boxShadow: 'none',
    color: colors.text.inverse.highlight,

    '&.hasIconRight': {
      '& svg:last-child': {
        marginRight: 0
      }
    },
    
    '& .MuiButton-label': {
      '& svg:first-child': {
        marginRight: '10px'
      },

      '& img:first-child': {
        marginRight: '10px'
      }
    },

    '&:hover': {
      backgroundColor: colors.primary.hover
    },

    '&:focus': {
      boxShadow: 'none'
    },

    '&.Mui-disabled': {
      backgroundColor: '#EEE'
    }
  },

  thin: {
    padding: '6px 15px',

    '&.outlined': {
      padding: '4px 15px'
    }
  },
  
  label: {
    textTransform: 'none'
  },

  grayText: {
    border: `2px solid ${colors.text.primary.light}`,
    backgroundColor: colors.inverse.normal,
    color: colors.text.primary.gray,

    '&:hover': {
      backgroundColor: colors.text.primary.light
    }
  },

  inverse: {
    border: `2px solid ${colors.primary.normal}`,
    backgroundColor: colors.inverse.normal,
    color: colors.text.primary.primary,

    '&.Mui-disabled': {
      border: '2px solid #00000000'
    },

    '&:hover': {
      backgroundColor: colors.inverse.hover
    }
  }
})
