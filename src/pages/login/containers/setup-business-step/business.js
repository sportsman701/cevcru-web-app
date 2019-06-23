import React, { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import cx from 'classnames';

import Select from 'components/select';
import CheckBox from 'components/checkbox';
import RadioButton from 'components/radio';

import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';
import useStyles from './style';

import { currencySelector } from 'redux/onboarding/selectors';

import image from 'resources/setup-business/business.svg';
import { teamSize } from 'helpers/network-constants'

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
  const currencies = useSelector(currencySelector, shallowEqual);

  const { history, onChange, errors, touched, values } = props

  const handleOnlinePaymentChange =
    value => () => onChange({ target: { value, name: 'onlinePayment' } });

  const handleTeamSizeChange =
    value => () => onChange({ target: { value, name: 'teamSize' } })

  useEffect(() => {
    if (!currencies || currencies.length === 0) {
      history.push('/setup-business');
    }
  }, []);

  return (
    <div>
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
                checked={values.teamSize === value}
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
            onChange={onChange}
            value={values.currency}
            id='currency'
            name='currency'
            error={errors.currency && touched.currency}
            label={trans('login.choose_currency')}
          >
            {currencies && currencies.map((currency, key) => (
              <MenuItem key={key} value={key}>
                {currency}
              </MenuItem>
            ))}
          </Select>
          {errors.currency && touched.currency && (
            <FormHelperText error>
              {errors.currency}
            </FormHelperText>
          )}
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
              checked={values.onlinePayment}
            >
              {trans('login.yes')}
            </RadioButton>
            <RadioButton
              onClick={handleOnlinePaymentChange(false)}
              checked={!values.onlinePayment}
            >
              {trans('login.no')}
            </RadioButton>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Business;
