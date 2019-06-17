import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';

import Password from 'components/input/password';
import Button from 'components/button';
import Link from 'components/link';
import useGlobalStyles from 'hooks/styles';
import useIntl from 'hooks/intl';

import vencruVerticalMobile from 'resources/logo/vencru-vertical-mobile.svg';

import useStyles from './style';


function ResetPassword(props) {
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();

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
          <img alt="" src={vencruVerticalMobile} />
          <p className={cx(
            globalClasses.textSubTitle,
            globalClasses.textContrast
          )}>
            { trans('login.reset_your_account_password') }
          </p>
          <Box className={cx(
            classes.passwordPanel,
            globalClasses.formPanel
          )}>
            <FormControl error>
              <Password placeholder={trans('login.password')} />
            </FormControl>
            <FormControl error>
              <Password placeholder={trans('login.confirm_password')} />
            </FormControl>
            <FormControl>
              <Button>
                {trans('login.reset_password')}
              </Button>
            </FormControl>
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

export default ResetPassword;
