import React, { useEffect } from 'react'

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import cx from 'classnames';

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
  const { errors, onChange, onBlur, touched, values } = props

  useEffect(() => console.log('hi'), []);

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
            id="firstName"
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
            id="lastName"
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
            id="company"
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
            id="phoneNumber"
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
            id="addressStreet"
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
            id="addressCity"
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
          <Select
            fullWidth
            id="addressCountry"
            name="addressCountry"
            onChange={onChange}
            value={values.addressCountry}
            label={trans("login.address_country")}
          >
            <MenuItem value={0}>
              NG
            </MenuItem>
            <MenuItem value={1}>
              AR
            </MenuItem>
          </Select>
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
