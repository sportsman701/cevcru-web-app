import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import cx from 'classnames';

import Select from 'components/select';
import CheckBox from 'components/checkbox';
import RadioButton from 'components/radio';

import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';
import useStyles from './style';

import image from 'resources/setup-business/business.svg';

const teamSize = {
  justMe:   0,
  s2_4:     1,
  s5_9:     2,
  s10_19:   3,
  s20plus:  4
}

const teamSizeOption = [
  { caption: 'Just me', value: teamSize.justMe },
  { caption: '2 - 4', value: teamSize.s2_4 },
  { caption: '5 - 9', value: teamSize.s5_9 },
  { caption: '10 - 19', value: teamSize.s10_19 },
  { caption: '20+', value: teamSize.s20plus }
]

function Business(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [onlinePayment, setOnlinePayment] = useState(true);
  const [teamSize, setTeamSize] = useState(0)

  const handleOnlinePaymentChange =
    value => () => setOnlinePayment(value);

  const handleTeamSizeChange =
    size => () => setTeamSize(size)

  return (
    <>
      <img className={classes.topImage} src={image} alt=""/>
      <p className={cx(
        globalClasses.textPrimary,
        globalClasses.textSizeC,
        classes.title
      )}>
        {trans('login.tell_us_about_your_business')}
      </p>
      <p className={cx(
        globalClasses.textNormal,
        classes.description
      )}>
        {trans('login.help_us_learn_about_your_business')}
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p className={cx(
            globalClasses.textPrimary,
            classes.fieldDescription
          )}>
            <small>
              {trans('login.what_is_your_team_size')}
            </small>
          </p>
          <Grid
            container
            spacing={1}
            className={classes.teamSize}
          >
          {teamSizeOption.map(({caption, value}) => (
            <Grid
              item
              key={value}
            >
              <CheckBox
                button
                fullWidth
                checked={teamSize === value}
                onClick={handleTeamSizeChange(value)}
              >
                {caption}
              </CheckBox>
            </Grid>
          ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            fullWidth
            value={0}
            id='currency'
            label={trans('login.choose_currency')}
          >
            <MenuItem key={1} value={0}>
              ₦ - Nigerian Naira
            </MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <p className={cx(
            globalClasses.textPrimary,
            classes.fieldDescription
          )}>
            <small>
              {trans('login.do_you_accept_online_payments')}
            </small>
          </p>
          <div className={classes.onlinePayment}>
            <RadioButton
              onClick={handleOnlinePaymentChange(true)}
              checked={onlinePayment}
            >
              {trans('login.yes')}
            </RadioButton>
            <RadioButton
              onClick={handleOnlinePaymentChange(false)}
              checked={!onlinePayment}
            >
              {trans('login.no')}
            </RadioButton>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Business;
