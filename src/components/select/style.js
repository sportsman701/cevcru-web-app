import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors'

export default makeStyles({
  root: {
    borderRadius: 4,
    textAlign: 'left',
    
    '&.error': {
      borderColor: colors.status.error,
      
      '& ~ .MuiSelect-icon': {
        color: `${colors.status.error}40 !important`
      }
    },

    '&:focus': {
      borderRadius: 4,
      backgroundColor: colors.inverse.normal
    }
  },

  icon: {
    marginRight: '5px',
    color: '#00000040'
  }
})
