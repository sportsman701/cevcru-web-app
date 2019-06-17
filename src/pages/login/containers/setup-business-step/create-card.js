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
          <Input fullWidth frame label="First name"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input fullWidth frame label="Last name"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input fullWidth frame label="Company"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input fullWidth frame label="Phone number"/>
        </Grid>
        <Grid item xs={12}>
          <Input fullWidth frame label="Address (street)"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input fullWidth frame label="Address (city)"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select fullWidth frame label="Address (country)">
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
