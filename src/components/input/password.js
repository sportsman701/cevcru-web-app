import React, { useState, useRef } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import cx from 'classnames';
import useStyles from './style';

function Password(props) {
  const [ showPassword, setShowPassword ] = useState(false);
  const { icon, error, className, ...other } = props;
  const classes = useStyles({ adornment: icon && true });

  function handleClickShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <InputBase
      {...other}
      type={showPassword ? 'text' : 'password'}
      className={cx(
        classes.root,
        className,
        { [classes.error]: error}
      )}
      classes={{input: classes.input}}
      endAdornment={ icon ?
        <InputAdornment position="end" className='adornment'>
          <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment> : undefined
      }
    />
  )
}

export default Password
