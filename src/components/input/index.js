import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './style';

function Input(props) {
  const classes = useStyles()
  return <InputBase {...props} className={classes.root}/>
}

export default Input;
