import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './style';
import cx from 'classnames';

function CustomButton(props) {
  const classes = useStyles();
  const variant = props.inverse ? 'outlined' : 'contained';
  const { inverse, grayText, ...other} = props;

  return (
    <Button
      variant={variant}
      {...other}
      classes={{label: classes.label}}
      className={cx(
        classes.root, {
          [classes.inverse]: props.inverse,
          [classes.grayText]: props.grayText
        }
      )}
    >
      { props.icon && (
        <img
          src={props.icon}
          className={classes.icon}
          alt=""
        />
      )}
      { props.children }
    </Button>
  )
}

export default CustomButton;
