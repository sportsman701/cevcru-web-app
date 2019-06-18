import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import cx from 'classnames';

import useStyles from './style';

function Input(props) {
  const classes = useStyles(props);
  const { frame, children, className, id, label, ...other } = props;
  
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
    <>
      {label && (
        <InputLabel
          shrink
          htmlFor={id}
          className={classes.label}
        >
          {label}
        </InputLabel>
      )}
      <InputBase
        {...other}
        id={id}
        className={cx(classes.root, className)}
        classes={{input: classes.input}}
      />
    </>
  )
}

export default Input;
