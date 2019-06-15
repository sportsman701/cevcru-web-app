import React from 'react';
import { Link } from 'react-router-dom'
import cx from 'classnames';
import useStyles from './style';

function LinkComponent(props) {
  const { inverse, className, target, external, ...other } = props;
  const classes = useStyles(props);
  const style = cx(
    className,
    classes.root,
    {[classes.inverse]: props.inverse},
  );

  return external ? (
    <a href={target} className={style}>
      {props.children}
    </a>
  ) : (
    <Link 
      {...other}
      to={target || '#'}
      className={style}
    >
      {props.children}
    </Link >
  )
}

export default LinkComponent;
