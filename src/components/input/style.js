import makeStyles from '@material-ui/core/styles/makeStyles';
import colors from 'helpers/colors';

export default makeStyles({
  root: {
    'label + &': {
      marginTop: '10px',
    },
    
    '& .adornment': {
      position: 'absolute',
      right: 0
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

    '&+.MuiInputBase-root': {
      marginTop: '5px'
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
