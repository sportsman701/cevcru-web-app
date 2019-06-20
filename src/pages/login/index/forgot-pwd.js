import React, { useReducer, useEffect } from 'react'
import { createAction } from 'redux-actions'
import { Formik } from 'formik';
import { useDispatch } from 'react-redux'

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';

import Input from 'components/input';
import Button from 'components/button';
import BarLoader from 'components/loader';
import Link from 'components/link';
import { Alert, AlertContent } from 'components/alert';

import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';
import { isEmail } from 'helpers/validate';
import { errorCode } from 'helpers/request';
import { pop, pushAndNavigate } from 'helpers/navigateWithData';

import { initiatePasswordChange } from 'redux/account/actions';
import vencruVerticalMobile from 'resources/logo/vencru-vertical-mobile.svg';
import useStyles from './style';


const actionThrowRequest = createAction('throwRequest');

const actionApiResult = createAction('apiResult');

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'throwRequest':
      return { apiStatus: true, apiResult: false };
    case 'apiResult':
    default:
      return { apiStatus: false, apiResult: payload };
  }
}

function ForgotPassword(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const dispatch = useDispatch();
  const { history } = props;

  const init = {
    apiResult: false,
    apiStatus: false
  };

  const [{
    apiResult,
    apiStatus
  }, localDispatch] = useReducer(reducer, init);

  useEffect(() => {
    const action = actionApiResult(pop('alert'));
    localDispatch(action);
  }, []);

  const validate = values => {
    const errors = {};
    
    if (!values.email) {
      errors.email = trans('login.required');
    } else if (!isEmail(values.email)) {
      errors.email = trans('login.invalid_email');
    }

    return errors;
  }

  const handleSendResetTokenClick = ({ email }, { setSubmitting }) => {
    const action = actionThrowRequest();

    setSubmitting(false);
    localDispatch(action);

    dispatch(initiatePasswordChange({
      body: { email },
      onSuccess: ({ issent }) => {
        if (!issent) {
          const result = trans('login.failed_to_send_password_reset_link_to_your_email');
          const action = actionApiResult(result);
          localDispatch(action);
        } else {
          const alert = trans('login.password_reset_link_has_been_sent_to_your_email');
          pushAndNavigate('alert', alert, history, '/login/account');
        }
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
            result = trans('login.failed_to_send_password_reset_link_to_your_email');
            break;
        }

        const action = actionApiResult(result);
        localDispatch(action);
      }
    }));
  }

  const handleEmailKeyUp =
    handleSubmit => e => e.which === 13 && handleSubmit()

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
            onClose={() => localDispatch(actionApiResult(false))}
            >
            <AlertContent fail>
              {apiResult}
            </AlertContent>
          </Alert>
          <BarLoader
            loading={apiStatus}
            className={classes.loader}
          />
          <img alt="" src={vencruVerticalMobile} />
          <p className={cx(
            globalClasses.textSubTitle,
            globalClasses.textContrast
          )}>
            { trans('login.request_password_reset') }
          </p>
          <Box className={cx(
            classes.passwordPanel,
            globalClasses.formPanel
          )}>
            <Formik
              initialValues={{ email: null }}
              onSubmit={handleSendResetTokenClick}
              validate={validate}
            >
              {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
                <>
                  <FormControl>
                    <Input
                      name='email'
                      error={errors.email && touched.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onKeyUp={handleEmailKeyUp(handleSubmit)}
                      placeholder={trans('login.email_address')}
                    />
                    {errors.email && touched.email && (
                      <FormHelperText error>
                        {errors.email}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <Button
                      onClick={handleSubmit}
                      disabled={apiStatus}
                    >
                      {trans('login.send_reset_token')}
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
        </Grid>
      </Grid>
    </Box>
  )
}

export default React.memo(ForgotPassword);
