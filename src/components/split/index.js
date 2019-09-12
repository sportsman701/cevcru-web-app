import React from 'react';
import cx from 'classnames';
import useStyles from './style';

function Split(props) {
  const { light, thin, className } = props;
  const classes = useStyles({light: !!light, thin: !!thin});
  return <hr className={cx(className, classes.root)} />
}

export default Split;
