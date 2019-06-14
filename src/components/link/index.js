import React from 'react';
import cx from 'classnames';
import useStyles from './style';

function Link(props) {
  const classes = useStyles(props);

  return (
    <span className={cx(classes.root, {[classes.inverse]: props.inverse})}>
      {props.children}
    </span>
  )
}

export default Link;
