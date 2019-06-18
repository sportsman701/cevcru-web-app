import React from 'react'

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import cx from 'classnames';

import Input from 'components/input';
import Select from 'components/select';
import CheckBox from 'components/checkbox';

import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';
import useStyles from './style';

function SetupBusiness(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  return (
    <>
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
            label={trans("login.first_name")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            fullWidth
            id="lastName"
            label={trans("login.last_name")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            fullWidth
            id="company"
            label={trans("login.company")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            fullWidth
            id="phoneNumber"
            label={trans("login.phone_number")}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            id="addressStreet"
            label={trans("login.address_street")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            fullWidth
            id="addressCity"
            label={trans("login.address_city")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            id="addressCountry"
            value={0}
            label={trans("login.address_country")}
          >
            <MenuItem key={1} value={0}>
              NG
            </MenuItem>
          </Select>
        </Grid>
      </Grid>
      <div className={classes.incorporatedLLC}>
        <CheckBox>
          {trans('login.my_business_is_incorporated_llc')}
        </CheckBox>
      </div>
    </>
  )
}

export default SetupBusiness;
