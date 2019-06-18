import React from 'react';
import cx from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckedIcon from '@material-ui/icons/CheckCircle'; // CheckCircleOutline
import useStyles from './style';


function RadioButton(props) {
  const { children, checked, onClick, className, ...other } = props;
  const classes = useStyles();

  const checkBox = (
    <Checkbox
      checked={checked}
      onChange={onClick}
      className={classes.root}
      icon={<UncheckedIcon/>}
      checkedIcon={<CheckedIcon/>}
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

export default RadioButton;
