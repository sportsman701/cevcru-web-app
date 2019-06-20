import React from 'react';

import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

import cx from 'classnames';
import useStyles from './style';


export function AlertContent(props) {
  const { children, fail, className, classes } = props
  const cls = useStyles();
  const Icon = fail ? CloseIcon : CheckIcon;

  return (
    <SnackbarContent
      classes={classes}
      className={cx(cls.root, { fail }, className)}
      message={(
        <span className={cls.message}>
          <Icon className='icon' />
          {children}
        </span>
      )}
    />
  )
}

export function Alert(props) {
  const { open, onClose, children, className } = props;

  return (
    <Snackbar
      className={className}
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      TransitionComponent={Collapse}
    >
      {children}
    </Snackbar>
  )
}
