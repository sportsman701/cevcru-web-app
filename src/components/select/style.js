import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors'

export default makeStyles({
  root: {
    borderRadius: 4,
    '&:focus': {
      borderRadius: 4,
      backgroundColor: colors.inverse.normal
    }
  }
})
