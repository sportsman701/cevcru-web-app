import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from 'redux-actions';

import { Formik } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';
import qs from 'qs';

import Password from 'components/input/password';
import Button from 'components/button';
import Link from 'components/link';
import BarLoader from 'components/loader';
import { Alert, AlertContent } from 'components/alert';
import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';
import { errorCode } from 'helpers/request';
import { pushAndNavigate } from 'helpers/navigateWithData';

import { validatePasswordResetToken, resetPassword } from 'redux/account/actions';

import vencruVerticalMobile from 'resources/logo/vencru-vertical-mobile.svg';

import useStyles from './style';


const actionThrowRequest = createAction('throwRequest');

const actionApiResult = createAction('apiResult');

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'throwRequest':
      return { ...state, apiStatus: true, apiResult: false };
    case 'apiResult':
    default:
      return { ...state, apiStatus: false, ...payload };
  }
}

function ResetPassword(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const dispatch = useDispatch();
  const { history, location } = props;

  const { userid, code } = qs.parse(location.search, { ignoreQueryPrefix: true });

  const init = {
    tokenValidated: false,
    apiResult: false,
    apiStatus: false
  };

  const [{
    tokenValidated,
    apiResult,
    apiStatus
  }, localDispatch] = useReducer(reducer, init);

  const validate = values => {
    const errors = {};
    
    if (!values.password) {
      errors.password = trans('login.required');
    } else if (values.password.length < 7) {
      errors.password = trans('login.password_length_should_be_more_than_6');
    } else if (values.password !== values.passwordConfirm) {
      errors.password = trans('login.password_mismatch');
      errors.passwordConfirm = true;
    }

    return errors;
  }

  const handleResetPasswordClick = ({ password }, { setSubmitting }) => {
    const action = actionThrowRequest();
    
    localDispatch(action);
    setSubmitting(false);
    
    dispatch(resetPassword({
      body: { newpassword: password, confirmPassword: password, code, userid },
      onSuccess: () => {
        const alert = trans('login.your_password_has_been_reset');
        pushAndNavigate('alert', alert, history, '/login/account');
      },
      onFail: errCode => {
        let result = false; 

        switch (errCode) {
          case errorCode.noResponse:
            result = trans('login.server_is_not_responding');
            break;

          case errorCode.network:
            result = trans('login.network_error');
            break;

          default:
            result = trans('login.failed_to_reset_your_password');
            break;
        }
        
        const action = actionApiResult({ apiResult: result });
        localDispatch(action);
      }
    }));
  }

  const handleConfirmPasswordKeyUp =
    handleSubmit => e => e.which === 13 && handleSubmit()

  useEffect(() => {
    const action = actionThrowRequest();
    localDispatch(action);

    dispatch(validatePasswordResetToken({
      body: { code, userid },
      onSuccess: ({ IsActive, isconfirmed }) => {
        if (isconfirmed) {
          const action = actionApiResult({ apiResult: false, tokenValidated: true });
          localDispatch(action);
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
            const alert = trans('login.your_reset_link_is_either_expired_or_invalid');
            pushAndNavigate('alert', alert, history, '/forgot-password');
            return;
        }

        const action = actionApiResult({ apiResult: result });
        localDispatch(action);
      }
    }));
  }, [])

  return (
    <Box className={cx(
      globalClasses.fullHeight,
      globalClasses.fullWidth,
      classes.blueScreen,
      'showAccount'
    )}>
      <Grid container className={classes.mainPanel}>
        <Grid
          item xs={12} md={6}
          className={cx(classes.account, 'keepMobileStyle')}
        >
          <Alert
            open={!!apiResult}
            className={cx({ [classes.dockedAlert]: !tokenValidated} )}
            onClose={
              tokenValidated
                ? () => localDispatch(actionApiResult({ apiResult: false}))
                : undefined
            }
          >
            <AlertContent fail>
              {apiResult}
            </AlertContent>
          </Alert>

          <BarLoader loading={apiStatus} className={classes.loader} />

          <img alt="" src={vencruVerticalMobile} />
          <p className={cx(
            globalClasses.textSubTitle,
            globalClasses.textContrast
          )}>
            { trans('login.reset_your_account_password') }
          </p>

          {apiStatus && !tokenValidated && (
            <p className={globalClasses.textNormal}>{trans('login.please_wait')}</p>
          )}

          {tokenValidated && (
            <Box className={cx(
              classes.passwordPanel,
              globalClasses.formPanel
            )}>
              <Formik
                initialValues={{ password: null, passwordConfirm: null }}
                onSubmit={handleResetPasswordClick}
                validate={validate}
              >
                {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
                  <>
                    <FormControl>
                      <Password
                        name='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={trans('login.password')}
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
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={trans('login.confirm_password')}
                        onKeyUp={handleConfirmPasswordKeyUp(handleSubmit)}
                        error={errors.passwordConfirm && touched.passwordConfirm}
                      />
                    </FormControl>
                    <FormControl>
                      <Button onClick={handleSubmit} disabled={apiStatus}>
                        {trans('login.reset_password')}
                      </Button>
                    </FormControl>
                  </>
                )}
              </Formik>
              <Box className={classes.dontHaveAccount}>
                <span className={globalClasses.textGray}>
                  { trans('login.dont_have_an_account') }
                </span>
                <Link target='/register'>
                  { trans('login.sign_up') }
                </Link>
              </Box>
              <Box my={1}>
                <Link target='/login/account'>
                  { trans('login.log_in_to_your_account') }
                </Link>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default React.memo(ResetPassword);
