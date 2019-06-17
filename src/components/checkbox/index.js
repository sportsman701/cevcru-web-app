import React, { useState } from 'react';
import cx from 'classnames';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './style';


function CheckboxComponent(props) {
  const { children, checked, onClick, value, className, ...other } = props;
  const classes = useStyles();

  const checkBox = (
    <Checkbox
      checked={checked}
      onChange={onClick}
      className={classes.root}
      value={value}
    />
  )
  
  return (
    <FormControlLabel
      {...other}
      label={children}
      control={checkBox}
      className={cx(
        classes.caption,
        className
      )}
    />
  );
}

export default CheckboxComponent;
