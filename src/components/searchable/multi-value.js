import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';


function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={cx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
};

export default MultiValue;
