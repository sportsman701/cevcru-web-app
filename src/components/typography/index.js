import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from 'hooks/useStyles';


function Typo(props) {
  const { className, ...others } = props
  const classes = useStyles(className)
  return <Typography className={classes[className]} {...others} />
}

export default Typo;
