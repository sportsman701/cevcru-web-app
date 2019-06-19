import React from 'react';
import cx from 'classnames';
import BarLoader from 'react-spinners/BarLoader';
import useStyles from './style';
import colors from 'helpers/colors';


function Loader(props) {
  const classes = useStyles();
  const { loading, width, inverse, className } = props;

  return (
    <div className={cx(
      classes.root,
      className
    )}>
      <BarLoader
        color={inverse ? colors.background.white : colors.primary.normal}
        loading={loading}
        // width={100}
      />
    </div>
  )
}

export default Loader;
