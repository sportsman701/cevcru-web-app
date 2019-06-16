import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import cx from 'classnames';
import useStyles from './style';

function Input(props) {
  const classes = useStyles(props);
  const { className, ...other } = props;
  
  return (
    <InputBase
      {...other}
      className={cx(classes.root, className)}
      classes={{input: classes.input}}
    />
  )
}

export default Input;
