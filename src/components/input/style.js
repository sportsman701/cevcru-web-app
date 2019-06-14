import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    'label + &': {
      marginTop: '10px',
    },
    '& input': {
      borderRadius: 4,
      backgroundColor: colors.inverse.normal,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      paddingRight: props => props.adornment ? '45px' : '12px',
      transition: 'border-color ease .5s',

      '&:focus': {
        borderColor: colors.primary.normal
      }
    },
    '& .adornment': {
      position: 'absolute',
      right: 0
    }
  },
})