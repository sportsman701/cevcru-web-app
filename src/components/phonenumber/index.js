import React from 'react';
import cx from 'classnames';
import ReactPhoneInput from 'react-phone-input-2';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './style.js';
import 'react-phone-input-2/dist/style.css'


function PhoneNumberInput(props) {
  const {
    id,
    label,
    error,
    value,
    className,
    defaultCountry,
    preferredCountries,
    enableSearchField,
    searchPlaceholder,
    ...other
  } = props;

  const classes = useStyles();

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
      <div className={cx(className, classes.root)}>
        <ReactPhoneInput
          value={value || ''}
          inputExtraProps={{ id, ...other }}
          searchPlaceholder={searchPlaceholder || 'Search'}
          disableSearchIcon
          disableAreaCodes={true}
          inputClass={cx(classes.input, { 'error': error })}
          buttonClass={cx(classes.button, { 'error': error })}
          searchClass={classes.search}
          dropdownClass={classes.dropdown}
          defaultCountry={ defaultCountry || "us" }
          preferredCountries={ preferredCountries || ['us', 'ng', 'gb', 'ca', 'au']}
          enableSearchField={enableSearchField || true}
        />
      </div>
    </>
  )
}

export default PhoneNumberInput;
