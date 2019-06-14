import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './style';
import cx from 'classnames';

function CustomButton(props) {
  const classes = useStyles();
  const variant = props.outlined ? 'outlined' : 'contained';
  const { outlined, ...other} = props;

  return (
    <Button
      variant={variant}
      {...other}
      classes={{label: classes.label}}
      className={cx(classes.root, classes[variant])}
    >
      {props.children}
    </Button>
  )
}

export default CustomButton;
