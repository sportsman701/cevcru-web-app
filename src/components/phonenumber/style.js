import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

const borderError = `1px solid ${colors.status.error}`;
const borderFocus = `1px solid ${colors.input.border.focus}`;
const borderNormal = `1px solid ${colors.input.border.normal}`;

export default makeStyles({
  root: {
    '& + .MuiFormHelperText-root': {
      fontSize: 'smaller',
      color: colors.status.error
    }
  },

  input: {
    borderRadius: '4px !important',
    backgroundColor: colors.inverse.normal,
    border: `${borderNormal} !important`,
    fontSize: '16px !important',
    height: '41px !important',
    paddingRight: ({ adornment }) => adornment ? '45px' : '12px',
    transition: 'all ease .5s',
    width: '100% !important',
    
    '&:focus': {
      border: `${borderFocus} !important`,
    },

    '&.error': {
      color: colors.status.error,
      border: `${borderError} !important`,
    },
  },

  label: {
    textAlign: 'left',
    color: colors.text.primary.primary,
    fontSize: 'smaller',
    transform: 'none',

    '&+div': {
      marginTop: '8px'
    }
  },

  error: {
    color: colors.status.error,
  },

  dropdown: {
    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12) !important',
    textAlign: 'left',
    minHeight: '300px',

    '& li span:last-child': {
      float: 'right'
    }
  },

  search: {
    '& input': {
      width: '95%'
    }
  },

  button: {
    border: '0 !important',
    borderRadius: '4px 0 0 4px !important',
    margin: '2px',
    transition: 'border ease .5s',

    '& .selected-flag': {
      borderRadius: '4px 0 0 4px !important',
      display: 'flex',
      justifyContent: 'center',
      padding: '0',
      transition: 'background-color ease .5s'
    },

    '& .arrow': {
      visibility: 'hidden'
    },

    '& .arrow-up': {
      visibility: 'hidden'
    }
  }
})
