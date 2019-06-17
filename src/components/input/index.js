import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import cx from 'classnames';
import useStyles from './style';

function Input(props) {
  const classes = useStyles(props);
  const { frame, children, className, ...other } = props;
  
  return frame ? (
    <TextField
      {...other}
      classes={{root: classes.frame}}
      className={className}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    >
      {children}
    </TextField>
  ) : (
    <InputBase
      {...other}
      className={cx(classes.root, className)}
      classes={{input: classes.input}}
    />
  )
}

export default Input;
