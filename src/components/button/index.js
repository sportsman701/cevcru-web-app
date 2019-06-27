import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './style';
import cx from 'classnames';

function ButtonComponent(props) {
  const classes = useStyles();
  const variant = props.inverse ? 'outlined' : 'contained';
  const { inverse, grayText, thin, className, ...other} = props;

  return (
    <Button
      variant={variant}
      {...other}
      classes={{label: classes.label}}
      className={cx(
        className,
        classes.root,
        { 'outlined': variant === 'outlined'},
        { [classes.thin]: !!props.thin },
        {
          [classes.inverse]: props.inverse,
          [classes.grayText]: props.grayText
        }
      )}
    >
      { props.icon && <img src={props.icon} alt=""/> }
      { props.children }
    </Button>
  )
}

export default ButtonComponent;
