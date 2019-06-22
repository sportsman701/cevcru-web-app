import React from 'react';
import Select from 'react-select';
import cx from 'classnames';

import { useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import Control from './control';
import Menu from './menu';
import MultiValue from './multi-value';
import NoOptionsMessage from './no-option';
import Option from './option';
import Placeholder from './placeholder';
import GroupLabel from './group-label';
import SingleValue from './single-value';
import ValueContainer from './value-container';
import useStyles from './style.js';


const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

function Searchable(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { data, label, id, placeholder, error, value, group, onChange } = props;
  
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),

    indicatorSeparator: base => ({ ...base, visibility: 'hidden' }),

    indicatorsContainer: base => ({ ...base, cursor: 'pointer' })
  };

  return (
    <>
      {label && (
        <InputLabel
          shrink
          htmlFor={id}
          className={cx(
            classes.label,
            {[classes.error]: error}
          )}
        >
          {label}
        </InputLabel>
      )}
      <Select
        classes={classes}
        styles={selectStyles}
        inputId={id}
        TextFieldProps={{ error }}
        options={data}
        components={components}
        placeholder={placeholder || ''}
        value={value}
        formatGroupLabel={group ? GroupLabel : undefined}
        onChange={onChange}
      />
    </>
  );
}

export default Searchable;
