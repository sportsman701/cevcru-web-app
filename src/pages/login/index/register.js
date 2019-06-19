import React from 'react'
import { Formik } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl'

import Welcome from '../containers/welcome';
import Input from 'components/input';
import Password from 'components/input/password';
import Button from 'components/button';
import Select from 'components/select';
import Link from 'components/link';
import useGlobalStyles from 'hooks/styles';
import { media, useMediaUp, useMediaSmallerThan } from 'hooks/media';
import useIntl from 'hooks/intl';
import { isEmail } from 'helpers/validate'

import vencruVerticalMobile from 'resources/logo/vencru-vertical-mobile.svg';
import google from 'resources/registration/google.svg';

import useStyles from './style';


function Register(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();
  const mediaSmallerThan = useMediaSmallerThan();

  const handleSignupClick = (values, actions) => {
    actions.setSubmitting(false);
  }

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = trans('login.required');
    } else if (!isEmail(values.email)) {
      errors.email = trans('login.invalid_email');
    }

    if (!values.password) {
      errors.password = trans('login.required');
    } else if (values.password !== values.passwordConfirm) {
      errors.password = trans('login.password_mismatch')
    }

    return errors;
  }

  const handlePasswordConfirmKeyUp =
    handleSubmit => e => e.which === 13 && handleSubmit()

  return (
    <Box className={cx(
      globalClasses.fullHeight,
      'showAccount',
      mediaSmallerThan(media.md) && [
        classes.blueScreen,
        globalClasses.fullWidth
      ]
    )}>
      <Grid container className={classes.mainPanel}>
        <Grid
          item xs={12} md={6}
          className={classes.account}
        >
          { mediaSmallerThan(media.md) && (
            <img alt="" src={vencruVerticalMobile} />
          )}
          <p className={cx(
            globalClasses.textTitle,
            mediaUp(media.md) ?
              globalClasses.textInverseHighlight
              : globalClasses.textContrast
          )}>
            { trans('login.setup_your_business_manager') }
          </p>
          <Box className={cx(
            classes.passwordPanel,
            globalClasses.formPanel
          )}>
            {mediaUp(media.sm) && (
              <p className={cx(
                classes.signupDescription,
                mediaUp(media.md) ?
                  globalClasses.textInverseNormal
                  : globalClasses.textNormal
              )}>
                {trans('login.add_your_contact_information')}
              </p>
            )}
            <Formik
              initialValues={{ email: null, password: null }}
              onSubmit={handleSignupClick}
              validate={validate}
            >
              {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
                <>
                  <FormControl>
                    <Input
                      name='email'
                      placeholder={trans('login.email_address')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email && touched.email}
                    />
                    {errors.email && touched.email && (
                      <FormHelperText error>
                        {errors.email}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <Password
                      name='password'
                      placeholder={trans('login.password')}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password && touched.password}
                    />
                    {errors.password && touched.password && (
                      <FormHelperText error>
                        {errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <Password
                      name='passwordConfirm'
                      placeholder={trans('login.confirm_password')}
                      onChange={handleChange}
                      onKeyUp={handlePasswordConfirmKeyUp(handleSubmit)}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                  <FormControl className={classes.phone}>
                    <Select value={0}>
                      <MenuItem value={0}>NG</MenuItem>
                    </Select>
                    <Input placeholder={'+234 (0) 123-456-7890'} />
                  </FormControl>
                  <FormControl>
                    <Button
                      inverse={mediaUp(media.md)}
                      onClick={handleSubmit}
                    >
                      {trans('login.get_started')}
                    </Button>
                  </FormControl>
                </>
              )}
            </Formik>
            {mediaUp(media.md) && (
              <p className={globalClasses.textInverseNormal}>
                {trans('login.or')}
              </p>
            )}
            <FormControl className={classes.loginWithGoogle}>
              <Button icon={google} grayText>
                { trans('login.login_with_google') }
              </Button>
            </FormControl>
            <Box className={classes.dontHaveAccount}>
              <span className={
                mediaUp(media.md) ?
                  globalClasses.textInverseNormal
                  : globalClasses.textGray
              }>
                { trans('login.already_have_an_account') }
              </span>
              <Link
                target='/login/account'
                inverse={mediaUp(media.md)}
              >
                { trans('login.log_in') }
              </Link>
            </Box>
            <small className={cx(
              classes.termPrivacy,
              mediaUp(media.md) ?
                globalClasses.textInverseHighlight
                : globalClasses.textGray
            )}>
              <FormattedMessage
                id='login.by_clicking_get_started'
                values={{
                  newline: <br/>,
                  terms: (
                    <Link
                      target='/service-terms'
                      inverse={mediaUp(media.md)}
                    >
                      {trans('login.terms_of_service')}
                    </Link>
                  ),
                  privacy: (
                    <Link
                      target='/privacy-policies'
                      inverse={mediaUp(media.md)}
                    >
                      {trans('login.privacy_policies')}
                    </Link>
                  )
                }}
              />
            </small>
          </Box>
        </Grid>
        <Welcome/>
      </Grid>
    </Box>
  )
}

export default Register;
