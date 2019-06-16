import React, { useState, useEffect } from 'react'

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
import {
  media,
  useMediaUp,
  useMediaSmallerThan
} from 'hooks/media';
import useIntl from 'hooks/intl';

import logoVerticalMobile from 'resources/logo/logo-vertical-mobile.svg';
import google from 'resources/registration/google.svg';

import useStyles from './style';


function Register(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();
  const mediaSmallerThan = useMediaSmallerThan();

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
            <img alt="" src={logoVerticalMobile} />
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
            <FormControl error>
              <Input placeholder={trans('login.email_address')} />
            </FormControl>
            <FormControl>
              <Password placeholder={trans('login.password')} />
              {/* <FormHelperText id="password-helper"></FormHelperText> */}
            </FormControl>
            <FormControl>
              <Password placeholder={trans('login.confirm_password')} />
              {/* <FormHelperText id="password-helper"></FormHelperText> */}
            </FormControl>
            <FormControl className={classes.phone}>
              <Select>
                <MenuItem value={10}>NG</MenuItem>
              </Select>
              <Input placeholder={'+234 (0) 123-456-7890'} />
            </FormControl>
            <FormControl>
              <Button inverse={mediaUp(media.md)}>
                {trans('login.get_started')}
              </Button>
            </FormControl>
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
