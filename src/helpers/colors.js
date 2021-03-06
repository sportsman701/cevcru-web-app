import theme from "theme";
import { amber, green } from '@material-ui/core/colors';

const colors = {
  primary: {
    normal: '#2D74DA',
    hover: '#4684dd',
    active: '#1055b7',
    light: '#79A6F6',
  },

  green: {
    normal: '#17BF5F',
    hover: '#2fd476'
  },

  inverse: {
    normal: '#FFFFFF',
    hover: '#d3dded',
    active: '#FFFFFF',
  },

  background: {
    white: '#FFFFFF',
    primary: '#2D74DA',
    dark: '#264678',
    light: '#F9F9F9',
    lightBlue: '#EFF4FA',
    modal: '#00000020'
  },

  snackbar: {
    info: '#D7F0FF'
  },

  input: {
    border: {
      normal: '#ced4da',
      focus: '#2D74DA'
    }
  },
  
  text: {
    primary: {
      normal: '#8CA0B3',
      primary: '#2D74DA',
      light: '#ECF0F3',
      gray: '#777',
      contrast: '#5a5a5a',
      green: '#17BF5F',
      placeholder: '#DFDFDF',
    },
    
    inverse: {
      normal: '#abc4e8',
      highlight: '#FFFFFF',
    }
  },

  link: {
    primary: {
      normal: '#2D74DA',
      hover: '#6497e0',
      active: '#2D74DA'
    },

    inverse: {
      normal: '#87d0f9',
      hover: '#d0e5f2',
      active: '#35B2F9'
    }
  },

  status: {
    error: theme.palette.error.dark,
    info: theme.palette.primary.dark,
    warning: amber[700],
    success: green[600]
  }
};

export default colors;
