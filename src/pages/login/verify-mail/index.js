import React, { useState } from 'react'

import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl'

import Input from 'components/input';
import Link from 'components/link';
import { Alert, AlertContent } from 'components/alert';
import useGlobalStyles from 'hooks/styles';
import {
  media,
  useMediaUp,
  useMediaSmallerThan
} from 'hooks/media';
import useIntl from 'hooks/intl';

import mailVerification from 'resources/registration/mail-verification.svg';
import useStyles from './style';


function VerifyMail() {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();
  const mediaSmallerThan = useMediaSmallerThan();
  const [ showResult, setShowResult ] = useState(false);

  const handleResendEmail = () => setShowResult(true);

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
          open={showResult}
          onClose={() => setShowResult(false)}
          className={cx({ [classes.dockedAlert]: mediaUp(media.sm) })}
          >
          <AlertContent>
            {trans('login.verification_code_is_incorrect')}
          </AlertContent>
        </Alert>
        <Box className={cx(
          globalClasses.formPanel,
          classes.content
        )}>
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
                    users@mail.com
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
            <Input/>
          </FormControl>
          <p className={globalClasses.textInverseNormal}>
            {trans('login.didnt_get_the_email')}
            <Link
              inverse
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

export default VerifyMail;
