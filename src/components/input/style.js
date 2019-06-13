import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    'label + &': {
      marginTop: '10px',
    },
    '& input': {
      borderRadius: 4,
      backgroundColor: 'white',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '7px 12px',
      paddingRight: adorment => adorment ? '45px' : 'inherit',
      transition: 'border-color ease .5s',
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderColor: colors.input.focus.border
      }
    },
    '& .adornment': {
      position: 'absolute',
      right: 0
    }
  },
})
