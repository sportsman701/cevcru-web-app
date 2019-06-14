import React, { useState, useEffect } from 'react'

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';

import Input from 'components/input';
import Password from 'components/input/password';
import Button from 'components/button';
import Link from 'components/link';
import useGlobalStyles from 'hooks/styles';
import useWidth from 'hooks/width';
import useIntl from 'hooks/intl';

import logo from 'resources/logo/logo.svg';
import logoHorizontalMobile from 'resources/logo/logo.svg';
import logoVerticalMobile from 'resources/logo/logo.svg';
import google from 'resources/registration/google.svg';
import image1 from 'resources/registration/1.svg';
import image2 from 'resources/registration/2.svg';
import image3 from 'resources/registration/3.svg';
import image4 from 'resources/registration/4.svg';

import useStyles from './style';


const carousel = [
  { image: image1, text: 'login.review_your_business_performance' },
  { image: image2, text: 'login.create_and_send_professional_invoices' },
  { image: image3, text: 'login.manage_your_inventory_and_low_stock_list' },
  { image: image4, text: 'login.organize_your_customer_information' },
];

function Login(props) {
  const width = useWidth();
  const translate = useIntl()
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const [ bullet, setBullet ] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    const timer = setInterval(() => {
      setBullet((bullet + 1) % carousel.length)
    }, 5000);
    return () => clearInterval(timer);
  }, [bullet]);

  return (
    <Box className={classes.root}>
      <Grid container className={classes.mainPanel}>
        <Grid
          item sm={6}
          className={classes.leftPanel}
        >
          <p className={classes.loginTitle}>
            { translate('login.log_into_your_business_manager') }
          </p>
          <Box className={cx(classes.passwordPanel, globalClasses.formPanel)}>
            <FormControl error>
              <Input placeholder={translate('login.email_address')} />
            </FormControl>
            <FormControl>
              <Password placeholder={translate('login.password')} />
              {/* <FormHelperText id="password-helper"></FormHelperText> */}
            </FormControl>
            <FormControl>
              <Button inverse>{ translate('login.get_started') }</Button>
            </FormControl>
            <Box py={3}>
              <Link inverse>
                { translate('login.forgot_password') }
              </Link>
            </Box>
            <FormControl>
              <Button icon={google} inverse grayText>
                { translate('login.login_with_google') }
              </Button>
            </FormControl>
          </Box>
        </Grid>
        <Grid className={classes.rightPanel} item sm={6}>
          <img alt="" src={logo}/>
          <p className={classes.imageTitle}>
            { translate(carousel[bullet].text) }
          </p>
          <img
            className={classes.image}
            alt=""
            src={carousel[bullet].image}
          />
          <Box display='flex' pt={8}>
            {Array(4).fill(0).map((item, key) => (
              <div
                key={key}
                onClick={() => setBullet(key)}
                className={cx(
                  classes.carouselIndicator,
                  { 'active': bullet === key }
                )}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login;