import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from 'components/button';
import cx from 'classnames';

import useStyles from './style';

function Input(props) {
  const {
    frame,
    children,
    className,
    id,
    label,
    error,
    iconButton,
    buttonDisabled,
    onIconButtonClick,
    ...other
  } = props;
  const classes = useStyles({ adornment: iconButton && true });
  const IconButton = iconButton;

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
          className={cx(
            classes.label,
            {[classes.error]: error}
          )}
        >
          {label}
        </InputLabel>
      )}
      <InputBase
        {...other}
        id={id}
        className={cx(
          classes.root,
          className,
          { [classes.error]: error }
        )}
        classes={{input: classes.input}}
        endAdornment={
          iconButton ? (
            <InputAdornment position="end" className='adornment'>
              <Button onClick={onIconButtonClick} disabled={buttonDisabled}>
                <IconButton/>
              </Button>
            </InputAdornment>
          ) : undefined
        }
      />
    </>
  )
}

export default Input;
