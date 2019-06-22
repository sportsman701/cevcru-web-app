import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import cx from 'classnames';
import { keys } from 'lodash';
import { Formik } from 'formik';

import Input from 'components/input';
import Select from 'components/select';
import CheckBox from 'components/checkbox';

import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';
import useStyles from './style';

function CreateCard(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [coporation, setCoporation] = useState(true);

  const initialValues = {
    firstName: null,
    lastName: null,
    company: null,
    phoneNumber: null,
    addressCity: null,
    addressStreet: null
  }

  const handleCoporationChange = () => setCoporation(!coporation)

  useEffect(() => console.log('hi'), []);

  const validate = values => {
    const errors = {};

    keys(initialValues).forEach(field => {
      if (!values[field]) {
        errors[field] = trans('login.required');
      }
    })

    return errors;
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
        <Formik
          initialValues={initialValues}
          // onSubmit={handleSignInClick}
          validate={validate}
        >
          {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
            <>
              <Grid item xs={12} sm={6}>
                <Input
                  fullWidth
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  id="company"
                  name="company"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  id="addressStreet"
                  name="addressStreet"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  id="addressCity"
                  name="addressCity"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                <Select
                  fullWidth
                  id="addressCountry"
                  name="addressCountry"
                  value={0}
                  label={trans("login.address_country")}
                >
                  <MenuItem key={1} value={0}>
                    NG
                  </MenuItem>
                </Select>
              </Grid>
            </>
          )}
        </Formik>
      </Grid>
      <div className={classes.incorporatedLLC}>
        <CheckBox
          checked={coporation}
          onClick={handleCoporationChange}
        >
          {trans('login.my_business_is_incorporated_llc')}
        </CheckBox>
      </div>
    </div>
  )
}

export default CreateCard;
