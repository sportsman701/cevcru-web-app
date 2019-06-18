import React, { useRef } from 'react'

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import cx from 'classnames';

import Input from 'components/input';
import Select from 'components/select';

import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';
import useStyles from './style';

import image from 'resources/setup-business/industry.svg';

const hearAboutVencru = [
  'login.friend',
  'login.website',
  'login.instagram_facebook',
  'login.twitter',
  'login.linkedin',
  'login.google',
  'login.appstore',
  'login.other'
]

function Industry(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

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
            label={trans('login.choose_your_industry')}
          >
            <MenuItem key={1} value={0}>
              NG
            </MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            value={0}
            id='hearFrom'
            label={trans('login.how_did_you_hear_about_vencru')}
          >
            {hearAboutVencru.map((item, key) => (
              <MenuItem key={key} value={key}>
                {trans(item)}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            label={trans('login.enter_the_code_for_your_referral')}
            placeholder={trans('login.enter_referral_code')}
            id='referralCode'
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
