import React, { useState, useEffect } from 'react'
import { compose } from 'redux'
import { useDispatch } from 'react-redux'
import { withRouter } from "react-router";

import { Formik } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GoogleLogin from 'react-google-login';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl'

import Welcome from '../containers/welcome';
import Input from 'components/input';
import Password from 'components/input/password';
import Button from 'components/button';
import Link from 'components/link';
import useGlobalStyles from 'hooks/styles';
import { media, useMediaUp, useMediaSmallerThan } from 'hooks/media';
import useIntl from 'hooks/intl';
import { isEmail } from 'helpers/validate';

import { signIn, signInGoogle } from 'redux/account/actions';

import vencruVerticalMobile from 'resources/logo/vencru-vertical-mobile.svg';
import google from 'resources/registration/google.svg';

import useStyles from './style';


function Login(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();
  const mediaSmallerThan = useMediaSmallerThan();
  const [ showAccount, setShowAccount ] = useState(false);
  const dispatch = useDispatch();
  const { history, match } = props;

  useEffect(() => {
    setShowAccount(!!match.params.account);
  }, [match.params.account])

  const openSignUp = () => history.push('/register')

  const openLogin = () => history.push('/login/account')

  const successGoogle = res => {
    const token = res.tokenObj.id_token;
    dispatch(signInGoogle({
      token
    }));
  }

  const failGoogle = res => null

  const handleSignInClick = ({ email, password }, actions) => {
    const deviceId = 'custom-device-id';
    const token = 'custom-token';
    
    actions.setSubmitting(false);
    dispatch(signIn({
      body: {
        email,
        password,
        deviceId,
        token
      }
    }));
  }

  const handlePasswordKeyUp =
    handleSubmit => e => e.which === 13 && handleSubmit()

  const validate = values => {
    const errors = {};
    
    if (!values.email) {
      errors.email = trans('login.required');
    } else if (!isEmail(values.email)) {
      errors.email = trans('login.invalid_email');
    }

    if (!values.password) {
      errors.password = trans('login.required');
    }

    return errors;
  }

  return (
    <Box className={cx(
      globalClasses.fullHeight,
      { showAccount },
      mediaSmallerThan(media.md) && showAccount && [
        classes.blueScreen,
        globalClasses.fullWidth
      ]
    )}>
      <Grid container className={classes.mainPanel}>
        <Grid
          item xs={12} md={6}
          className={cx(classes.account)}
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
            { trans('login.log_into_your_business_manager') }
          </p>
          <Box className={cx(
            classes.passwordPanel,
            globalClasses.formPanel
          )}>
            <Formik
              initialValues={{ email: null, password: null }}
              onSubmit={handleSignInClick}
              validate={validate}
            >
              {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
                <>
                  <FormControl>
                    <Input
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email && touched.email}
                      placeholder={trans('login.email_address')}
                    />
                    {errors.email && touched.email && (
                      <FormHelperText error>
                        {errors.email}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <Password
                      icon
                      name='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onKeyUp={handlePasswordKeyUp(handleSubmit)}
                      error={errors.password && touched.password}
                      placeholder={trans('login.password')}
                    />
                    {errors.password && touched.password && (
                      <FormHelperText error>
                        {errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <Button
                      onClick={handleSubmit}
                      inverse={mediaUp(media.md)}
                    >
                      {trans(mediaUp(media.md)
                        ? 'login.get_started'
                        : 'login.sign_in')}
                    </Button>
                  </FormControl>
                </>
              )}
            </Formik>
            <Link
              target='/forgot-password'
              inverse={mediaUp(media.md)}
              className={classes.forgotPassword}
            >
              {trans('login.forgot_password')}
            </Link>
            <FormControl className={classes.loginWithGoogle}>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={renderProps => (
                  <Button
                    icon={google}
                    grayText
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    { trans('login.login_with_google') }
                  </Button>
                )}
                onSuccess={successGoogle}
                onFailure={failGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </FormControl>
            <Box className={classes.dontHaveAccount}>
              <span className={
                mediaUp(media.md) ?
                  globalClasses.textInverseNormal
                  : globalClasses.textGray
              }>
                { trans('login.dont_have_an_account') }
              </span>
              <Link
                target='/register'
                inverse={mediaUp(media.md)}
              >
                { trans(mediaUp(media.md)
                  ? 'login.create_one'
                  : 'login.sign_up') }
              </Link>
            </Box>
            { mediaUp(media.md) && (
              <small className={cx(
                globalClasses.textInverseHighlight,
                classes.termPrivacy
              )}>
                <FormattedMessage
                  id='login.by_clicking_get_started'
                  values={{
                    newline: <br/>,
                    terms: (
                      <Link target='/service-terms' inverse external>
                        {trans('login.terms_of_service')}
                      </Link>
                    ),
                    privacy: (
                      <Link target='/privacy-policies' inverse external>
                        {trans('login.privacy_policies')}
                      </Link>
                    )
                  }}
                />
              </small>
            )}
          </Box>
        </Grid>
        <Welcome
          openSignUp={openSignUp}
          openLogin={openLogin}
        />
      </Grid>
    </Box>
  )
}


export default compose(
  React.memo,
  withRouter
)(Login);
