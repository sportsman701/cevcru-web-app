import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import cx from 'classnames';

import Input from 'components/input';
import Select from 'components/select';

import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';
import useStyles from './style';

import { otherIndustrySelector } from 'redux/onboarding/selectors';

import image from 'resources/setup-business/industry.svg';

const hearFrom = [
  'login.friend',
  'login.website',
  'login.instagram_facebook',
  'login.twitter',
  'login.linkedin',
  'login.google',
  'login.appstore',
  'login.other'
]

const mainIndustries = [
  'login.trades_and_services',
  'login.development_and_it'
]

function Industry(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const { errors, onChange, onBlur, touched, values, history } = props
  const otherIndustries = useSelector(otherIndustrySelector, shallowEqual);
  
  if (!otherIndustries || otherIndustries.length === 0) {
    history.push('/setup-business');
    return null;
  }

  const industries = mainIndustries.map(v => trans(v)).concat(otherIndustries);

  return (
    <div>
      <img className={classes.topImage} src={image} alt=""/>
      <p className={cx(
        globalClasses.textPrimary,
        globalClasses.textSizeC,
        classes.title
      )}>
        {trans('login.tell_us_about_your_industry')}
      </p>
      <p className={cx(
        globalClasses.textNormal,
        classes.description
      )}>
        {trans('login.help_us_learn_about_your_business')}
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            id='industry'
            name="industry"
            onBlur={onBlur}
            onChange={onChange}
            value={values.industry}
            error={errors.industry && touched.industry}
            label={trans('login.choose_your_industry')}
          >
            {industries.map((item, key) => (
              <MenuItem key={key} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          {errors.industry && touched.industry && (
            <FormHelperText error>
              {errors.industry}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            id='hearFrom'
            name="hearFrom"
            onBlur={onBlur}
            onChange={onChange}
            value={values.hearFrom}
            error={errors.hearFrom && touched.hearFrom}
            label={trans('login.how_did_you_hear_about_vencru')}
          >
            {hearFrom.map((item, key) => (
              <MenuItem key={key} value={key}>
                {trans(item)}
              </MenuItem>
            ))}
          </Select>
          {errors.hearFrom && touched.hearFrom && (
            <FormHelperText error>
              {errors.hearFrom}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            id='referralCode'
            name="referralCode"
            onBlur={onBlur}
            onChange={onChange}
            value={values.referralCode}
            label={trans('login.enter_the_code_for_your_referral')}
            placeholder={trans('login.enter_referral_code')}
          />
          <p className={cx(
            globalClasses.textPrimary,
            classes.referralDescription
          )}>
            <small>
              {trans('login.enter_your_referees_code')}
            </small>
          </p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Industry;
