import { emphasize, makeStyles } from '@material-ui/core/styles';
import colors from 'helpers/colors';

export default makeStyles(theme => ({
  root: {
    '& + .MuiFormHelperText-root': {
      fontSize: 'smaller',
      color: colors.status.error
    },
  },

  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
    zIndex: 1
  },

  valueContainer: {
    display: 'flex',
    padding: '7px 0 7px 12px',
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
    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
    borderRadius: '4px',

    '& div': {
      fontSize: '16px'
    }
  },

  menuItem: {
    padding: '2px 15px',
    minHeight: '20px'
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