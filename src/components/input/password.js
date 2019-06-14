import React, { useState, useRef } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import useStyles from './style';

function Password(props) {
  const [ showPassword, setShowPassword ] = useState(false);
  const classes = useStyles({ adornment: true });

  function handleClickShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <InputBase
      {...props}
      type={showPassword ? 'text' : 'password'}
      className={classes.root}
      endAdornment={
        <InputAdornment position="end" className='adornment'>
          <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default Password
