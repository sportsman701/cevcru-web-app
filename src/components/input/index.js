import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import style from './style.js';


function Input(props) {
  return  <InputBase {...props} />
}

export default compose(
  withStyles(style)
)(Input)