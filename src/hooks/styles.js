import { makeStyles  } from '@material-ui/styles';
import colors from 'helpers/colors';


export default makeStyles({
  formPanel: {
    display: 'flex',
    flexDirection: 'column',

    '& .MuiFormControl-root': {
      margin: '0.5em 0'
    }
  }
});