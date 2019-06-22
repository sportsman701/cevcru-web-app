import React, { useEffect } from 'react'

import Grid from '@material-ui/core/Grid';
// import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import cx from 'classnames';

import Input from 'components/input';
import Searchable from 'components/searchable';
import CheckBox from 'components/checkbox';

import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';
import countries from 'helpers/countries';
import useStyles from './style';
import 'flag-icon-css/css/flag-icon.min.css';


const countriesWithFlag = countries.map(({ label, options }) => ({
  label,
  options: options.map(({ code, name }) => ({
    value: name,
    data: code,
    label: (
      <span title={name.length > 25 ? name : undefined}>
        <span
          className={`flag-icon flag-icon-${code.toLowerCase()}`}
          style={{marginRight: '10px', minWidth: '20px'}}
        />
        {name}
      </span>
    )
  }))
}))

function CreateCard(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const { errors, onChange, onBlur, touched, values } = props

  const handleCountryChange = onChange => value => {
    onChange({
      target: {
        value,
        name: 'addressCountry'
      }
    })
  }

  return (
    <div>
      <p className={cx(
        globalClasses.textPrimary,
        globalClasses.textSizeC,
        classes.title
      )}>
        {trans('login.create_your_business_card')}
      </p>
      <p className={cx(
        globalClasses.textNormal,
        classes.description
      )}>
        {trans('login.creating_your_business_card')}
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Input
            fullWidth
            name="firstName"
            onChange={onChange}
            onBlur={onBlur}
            value={values.firstName}
            error={errors.firstName && touched.firstName}
            label={trans("login.first_name")}
          />
          {errors.firstName && touched.firstName && (
            <FormHelperText error>
              {errors.firstName}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            fullWidth
            name="lastName"
            onChange={onChange}
            onBlur={onBlur}
            value={values.lastName}
            error={errors.lastName && touched.lastName}
            label={trans("login.last_name")}
          />
          {errors.lastName && touched.lastName && (
            <FormHelperText error>
              {errors.lastName}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            fullWidth
            name="company"
            onChange={onChange}
            onBlur={onBlur}
            value={values.company}
            error={errors.company && touched.company}
            label={trans("login.company")}
          />
          {errors.company && touched.company && (
            <FormHelperText error>
              {errors.company}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            fullWidth
            name="phoneNumber"
            onChange={onChange}
            onBlur={onBlur}
            value={values.phoneNumber}
            error={errors.phoneNumber && touched.phoneNumber}
            label={trans("login.phone_number")}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <FormHelperText error>
              {errors.phoneNumber}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            name="addressStreet"
            onChange={onChange}
            onBlur={onBlur}
            value={values.addressStreet}
            error={errors.addressStreet && touched.addressStreet}
            label={trans("login.address_street")}
          />
          {errors.addressStreet && touched.addressStreet && (
            <FormHelperText error>
              {errors.addressStreet}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            fullWidth
            name="addressCity"
            onChange={onChange}
            onBlur={onBlur}
            value={values.addressCity}
            error={errors.addressCity && touched.addressCity}
            label={trans("login.address_city")}
          />
          {errors.addressCity && touched.addressCity && (
            <FormHelperText error>
              {errors.addressCity}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Searchable
            name="addressCountry"
            data={countriesWithFlag}
            value={values.addressCountry}
            onChange={handleCountryChange(onChange)}
            label={trans('login.address_country')}
            error={errors.addressCountry && touched.addressCountry}
          />
        </Grid>
      </Grid>
      <div className={classes.incorporatedLLC}>
        <CheckBox
          name="businessType"
          onChange={onChange}
          checked={values.businessType}
        >
          {trans('login.my_business_is_incorporated_llc')}
        </CheckBox>
      </div>
    </div>
  )
}

export default CreateCard;
