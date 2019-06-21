import React, { useState, useReducer, useEffect } from 'react'
import { createAction } from 'redux-actions'
import { useDispatch, useSelector } from 'react-redux'

import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import ArrowForward from '@material-ui/icons/ArrowForward';

import cx from 'classnames';
import { FormattedMessage } from 'react-intl'

import Input from 'components/input';
import Link from 'components/link';
import BarLoader from 'components/loader';
import { Alert, AlertContent } from 'components/alert';
import useGlobalStyles from 'hooks/styles';
import {
  media,
  useMediaUp,
  useMediaSmallerThan
} from 'hooks/media';
import useIntl from 'hooks/intl';
import { errorCode } from 'helpers/request';

import accountSelector from 'redux/account/selectors';
import { confirmEmail, resendActivationEmail } from 'redux/account/actions';
import { pushAndNavigate } from 'helpers/navigateWithData';

import mailVerification from 'resources/registration/mail-verification.svg';
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

function VerifyMail(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();
  const mediaSmallerThan = useMediaSmallerThan();
  const dispatch = useDispatch();
  const [ code, setCode ] = useState('');
  const { userId, email } = useSelector(accountSelector); 

  const init = {
    apiResult: {  // false for hide result, other (below) to show alert
      result: true, // true for success, false for fail
      content: trans('login.we_ve_sent_a_verification_email')
    },
    apiStatus: false
  };

  const [{
    apiResult,
    apiStatus
  }, localDispatch] = useReducer(reducer, init);

  const handleCodeChange = e => setCode(e.target.value.slice(0, 6).replace( /\D+/g, ''))

  const handleResendEmail = () => {
    const action = actionThrowRequest();
    localDispatch(action);

    dispatch(resendActivationEmail({
      body: { email },
      onSuccess: data => {
        const action = actionApiResult({
          result: true,
          content: trans('login.we_ve_sent_a_verification_email')}
        );
        localDispatch(action);
      },
      onFail: errCode => {
        let content = false; 

        switch (errCode) {
          case errorCode.noResponse:
            content = trans('login.server_is_not_responding');
            break;

          case errorCode.network:
            content = trans('login.network_error');
            break;

          default:
            content = trans('login.failed_to_send_verification_email');
            break;
        }

        const action = actionApiResult({ result: false, content });
        localDispatch(action);
      }
    }));
  }

  const handleCodeKeyUp = e => e.which === 13 && handleVerifyCodeClick()

  const handleVerifyCodeClick = () => {
    if (apiStatus || code.length < 5) {
      return;
    }
    
    const action = actionThrowRequest();
    localDispatch(action);

    dispatch(confirmEmail({
      body: { userId, code },
      onSuccess: ({ isconfirmed }) => {
        const { history } = props;
        if (isconfirmed) {
          pushAndNavigate('alert', trans('login.you_are_now_verified'), history, '/setup-business');
        } else {
          const content = trans('login.verification_code_is_incorrect');; 
          const action = actionApiResult({ result: false, content });
          localDispatch(action);
        }
      },
      onFail: errCode => {
        let content = false; 

        switch (errCode) {
          case errorCode.noResponse:
            content = trans('login.server_is_not_responding');
            break;

          case errorCode.network:
            content = trans('login.network_error');
            break;

          default:
            content = trans('login.verification_code_is_incorrect');
            break;
        }

        const action = actionApiResult({ result: false, content });
        localDispatch(action);
      }
    }));
  }

  return (
    <Box className={cx(
      classes.root,
      globalClasses.fullHeight,
      globalClasses.fullWidth
    )}>
      <Box
        className={cx(
          classes.mainPanel,
          mediaSmallerThan(media.sm) && [
            globalClasses.fullHeight,
            globalClasses.fullWidth
          ]
        )}
      >
        <Alert
          open={!!apiResult}
          onClose={() => localDispatch(actionApiResult(false))}
          className={cx({ [classes.dockedAlert]: mediaUp(media.sm) })}
        >
          <AlertContent fail={!apiResult.result}>
            {apiResult.content}
          </AlertContent>
        </Alert>
        <Box className={cx(
          globalClasses.formPanel,
          classes.content
        )}>
          <BarLoader
            inverse
            loading={apiStatus}
            className={classes.loader}
          />
          <img alt='' src={mailVerification} />
          <p className={cx(
            globalClasses.textInverseHighlight,
            globalClasses.textTitle
          )}>
            <FormattedMessage
              id='login.you_are_almost_there'
              values={{ newline: <br/> }}
            />
          </p>
          <p className={cx(
            globalClasses.textInverseNormal,
            classes.description
          )}>
            <FormattedMessage
              id='login.to_keep_your_financial_information_secure'
              values={{
                email: (
                  <span className={globalClasses.textInverseHighlight}>
                    {email}
                  </span>
                ),
                whatsapp: (
                  <span className={globalClasses.textInverseHighlight}>
                    Whatsapp
                  </span>
                )
              }}
            />
          </p>
          <p className={globalClasses.textInverseNormal}>
            {trans('login.enter_verification_code')}
          </p>
          <FormControl className={classes.verificationCode}>
            <Input
              placeholder={trans('login.enter_your_code')}
              onChange={handleCodeChange}
              onKeyUp={handleCodeKeyUp}
              value={code}
              buttonDisabled={apiStatus || code.length < 5}
              onIconButtonClick={handleVerifyCodeClick}
              iconButton={ArrowForward}
            />
          </FormControl>
          <p className={globalClasses.textInverseNormal}>
            {trans('login.didnt_get_the_email')}
            <Link
              inverse
              disabled={apiStatus}
              onClick={handleResendEmail}
              className={cx(
                globalClasses.textInverseHighlight,
                classes.resendEmail
              )}
            >
              {trans('login.resend_email')}
            </Link>
          </p>
          <div className={classes.haveIssue}>
            <small className={globalClasses.textInverseNormal}>
              {trans('login.have_issues_setting_up')}
            </small>
            <Link
              inverse
              className={globalClasses.textInverseHighlight}
            >
              {trans('login.whatsapp_us')}
            </Link>
          </div>
        </Box>
      </Box>
    </Box>
  )
}

export default React.memo(VerifyMail);
