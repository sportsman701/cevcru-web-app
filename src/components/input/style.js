import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    'label + &': {
      marginTop: '10px',
    },

    '& + .MuiFormHelperText-root': {
      fontSize: 'smaller',
      color: colors.status.error
    },
    
    '& .adornment': {
      position: 'absolute',
      right: 0,

      '& button': {
        padding: '3px',
        marginRight: '3px',
        minWidth: 'inherit'
      }
    }
  },

  input: {
    borderRadius: 4,
    backgroundColor: colors.inverse.normal,
    border: `1px solid ${colors.input.border.normal}`,
    fontSize: 16,
    padding: '10px 12px',
    paddingRight: ({ adornment }) => adornment ? '45px' : '12px',
    transition: 'all ease .5s',
    
    '&:focus': {
      borderColor: colors.input.border.focus
    }
  },

  label: {
    textAlign: 'left',
    color: colors.text.primary.primary,
    fontSize: 'smaller',
    transform: 'none',

    '&+.MuiInputBase-root': {
      marginTop: '8px'
    }
  },

  error: {
    color: colors.status.error,

    '& input': {
      borderColor: colors.status.error
    }
  },

  frame: {
    '& label': {
      color: colors.text.primary.normal
    },

    '& label.Mui-focused': {
      color: colors.input.border.focus
    },

    '& .MuiOutlinedInput-root': {
      fontSize: 'initial',
      
      '& input': {
        padding: '12px'
      },

      '& .MuiSelect-select': {
        padding: '12px',
        textAlign: 'left',

        '&:focus': {
          backgroundColor: `${colors.background.white}00`
        }
      },

      '& fieldset': {
        transition: 'border-color ease .5s',
        borderColor: colors.input.border.normal
      },

      '&:hover fieldset': {
        borderColor: colors.input.border.normal,
      },

      '&.Mui-focused fieldset': {
        border: `1px solid ${colors.input.border.focus}`
      }
    }
  }
})
