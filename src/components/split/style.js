import { makeStyles  } from '@material-ui/styles';
import colors from 'helpers/colors';


export default makeStyles(theme => ({
  root: {
    border: ({ light }) => `1px solid ${light ? colors.text.primary.light : colors.primary.normal}`,
    margin: ({ thin }) => thin ? '0.3em 0' : '1.5em 0',

    [theme.breakpoints.only('xs')]: {
      border: ({ light }) => `0.5px solid ${light ? colors.text.primary.light : colors.primary.normal}`,
    }
  }
}));