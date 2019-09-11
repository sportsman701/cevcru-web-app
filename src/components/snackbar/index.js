import React from 'react';
import cx from 'classnames';
import useGlobalStyles from 'hooks/styles';

import useStyles from './style';


function Snackbar(props) {
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return props.show ? (
    <div className={cx(
      classes.root,
      globalClasses.textPrimary
    )}>
      <div className={classes.content}>
        {props.children}
      </div>
      <span
        className={classes.closeButton}
        onClick={props.onClose}
      >
        &times;
      </span>
    </div>
  ) : <></>
}

export default Snackbar;
