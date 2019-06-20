import React, { useEffect, useRef, useReducer } from 'react'
import { createAction } from 'redux-actions'
import { useDispatch } from 'react-redux'

import cx from 'classnames';
import { FormattedMessage } from 'react-intl'

import { Formik } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GoogleLogin from 'react-google-login';

import Welcome from '../containers/welcome';
import Input from 'components/input';
import Password from 'components/input/password';
import Button from 'components/button';
import Link from 'components/link';
import BarLoader from 'components/loader';
import { Alert, AlertContent } from 'components/alert';
import useGlobalStyles from 'hooks/styles';
import { media, useMediaUp, useMediaSmallerThan } from 'hooks/media';
import useIntl from 'hooks/intl';

import { isEmail } from 'helpers/validate';
import { errorCode } from 'helpers/request';
import { pop, pushAndNavigate } from 'helpers/navigateWithData';

import { signIn, withGoogle } from 'redux/account/actions';

import vencruVerticalMobile from 'resources/logo/vencru-vertical-mobile.svg';
import google from 'resources/registration/google.svg';

import useStyles from './style';


const actionInitPage = createAction('initPage');

const actionThrowRequest = createAction('throwRequest');

const actionApiResult = createAction('apiResult');

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'initPage':
      return { ...state, ...payload };
    case 'throwRequest':
      return { ...state, apiStatus: true, apiResult: false };
    case 'apiResult':
    default:
      return { ...state, apiStatus: false, apiResult: payload };
  }
}

function Login(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();
  const mediaSmallerThan = useMediaSmallerThan();
  const dispatch = useDispatch();
  const timer = useRef(null);
  
  const init = {
    alert : false,
    showAccount: false,
    apiResult: false,   // string: api result, false: don't show api result
    apiStatus: false    // true: request pending, false: request finished
  };

  const [{
    showAccount,
    alert,
    apiResult,
    apiStatus
  }, localDispatch] = useReducer(reducer, init);
  
  const { history, match } = props;

  useEffect(() => {
    const action = actionInitPage({
      showAccount: !!match.params.account,
      alert: pop('alert')
    });
    localDispatch(action);
    return () => clearTimeout(timer.current);
  }, [match.params.account])

  const openSignUp = () => history.push('/register')

  const openLogin = () => history.push('/login/account')

  const successGoogle = res => {
    const token = res.tokenObj.id_token;
    dispatch(withGoogle({
      body: { token },
      onSuccess: data => {
        // after login
      }
    }));
  }

  const failGoogle = res => console.log(res)

  const handleSignInClick = ({ email, password }, { setSubmitting }) => {
    const deviceId = 'custom-device-id';
    const token = 'custom-token';
    const action = actionThrowRequest();

    setSubmitting(false);
    localDispatch(action);

    dispatch(signIn({
      body: {
        email,
        password,
        deviceId,
        token
      },
      onSuccess: ({ emailconfirmed }) => {
        if (emailconfirmed) {
          const action = actionApiResult(false);
          localDispatch(action);
          //after login
        } else {
          pushAndNavigate('email', email, history, '/verify-email',);
        }
      },
      onFail: (errCode, { Message }) => {
        let result = false; 

        switch (errCode) {
          case errorCode.noResponse:
            result = trans('login.server_is_not_responding');
            break;

          case errorCode.network:
            result = trans('login.network_error');
            break;

          default:
            result = Message;
            break;
        }

        const action = actionApiResult(result);
        
        clearTimeout(timer.current);
        localDispatch(action);
        timer.current = setTimeout(() =>
          localDispatch(actionApiResult(false)), 3000);
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
        <Alert
          open={!!alert}
          onClose={() => localDispatch(actionInitPage({ alert: false }))}
          >
          <AlertContent>
            {alert}
          </AlertContent>
        </Alert>
        <Grid
          item xs={12} md={6}
          className={cx(classes.account)}
        >
          <BarLoader
            loading={apiStatus}
            inverse={mediaUp(media.md)}
            className={classes.loader}
          />
          { mediaSmallerThan(media.md) && (
            <img alt="" src={vencruVerticalMobile} />
          )}
          <p className={cx(
            classes.title,
            globalClasses.textTitle,
            mediaUp(media.md)
              ? globalClasses.textInverseHighlight
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
                  { apiResult && (
                    <p className={classes.invalidCredential}>
                      { apiResult }
                    </p>
                  )}
                  <FormControl>
                    <Button
                      onClick={handleSubmit}
                      inverse={mediaUp(media.md)}
                      disabled={apiStatus}
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
                    disabled={renderProps.disabled || apiStatus }
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

export default React.memo(Login);
