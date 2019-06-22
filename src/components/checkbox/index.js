import React from 'react';
import cx from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from 'components/button';
import useStyles from './style';


function CheckboxComponent(props) {
  const {
    children,
    button,
    checked,
    onClick,
    onChange,
    className,
    ...other
  } = props;
  const classes = useStyles();

  const checkBox = (
    <Checkbox
      checked={checked}
      onChange={onChange}
      className={classes.root}
    />
  )
  
  return button ? (
    <Button
      inverse={!checked}
      onClick={onClick}
      className={classes.button}
      {...other}
    >
      {children}
    </Button>
  ) : (
    <FormControlLabel
      {...other}
      label={children}
      control={checkBox}
      className={cx(
        classes.caption,
        className
      )}
    />
  )
}

export default CheckboxComponent;
