import { emphasize, makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';

export default makeStyles(theme => ({
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },

  valueContainer: {
    display: 'flex',
    padding: '7px 12px',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },

  chip: {
    margin: theme.spacing(0.5, 0.25),
  },

  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },

  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },

  singleValue: {
    fontSize: 16,
    whiteSpace: 'nowrap'
  },

  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    margin: 0,
    left: 0,
    right: 0,

    '& div': {
      fontSize: '16px'
    }
  },

  divider: {
    height: theme.spacing(2),
  },

  label: {
    textAlign: 'left',
    color: colors.text.primary.primary,
    fontSize: 'smaller',
    transform: 'none',
    marginBottom: '8px'
  },

  error: {
    color: colors.status.error,

    '& input': {
      borderColor: colors.status.error
    }
  },
}));