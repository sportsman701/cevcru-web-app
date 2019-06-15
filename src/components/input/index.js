import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './style';

function Input(props) {
  const classes = useStyles(props);
  return (
    <InputBase
      {...props}
      className={classes.root}
      classes={{input: classes.input}}
    />
  )
}

export default Input;
