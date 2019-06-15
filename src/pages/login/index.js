import React, { useState, useEffect } from 'react'

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl'

import Input from 'components/input';
import Password from 'components/input/password';
import Button from 'components/button';
import Link from 'components/link';
import useGlobalStyles from 'hooks/styles';
import {
  media,
  useMediaUp,
  useMediaSmallerThan
} from 'hooks/media';
import useIntl from 'hooks/intl';

import logo from 'resources/logo/logo.svg';
import logoVerticalMobile from 'resources/logo/logo-vertical-mobile.svg';
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
  const trans = useIntl();
  const classes = useStyles();
  const globalClasses = useGlobalStyles();
  const mediaUp = useMediaUp();
  const mediaSmallerThan = useMediaSmallerThan();
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
      <Grid container className={cx(classes.mainPanel, 'showForm')}>
        <Grid item xs={12} md={6} className={classes.leftPanel}
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
            { trans('login.log_into_your_business_manager') }
          </p>
          <Box className={cx(
            classes.passwordPanel,
            globalClasses.formPanel
          )}>
            <FormControl error>
              <Input placeholder={trans('login.email_address')} />
            </FormControl>
            <FormControl>
              <Password placeholder={trans('login.password')} />
              {/* <FormHelperText id="password-helper"></FormHelperText> */}
            </FormControl>
            <FormControl>
              <Button inverse={mediaUp(media.md)}>
                {trans(mediaUp(media.md) ? 'login.get_started' : 'login.sign_in')}
              </Button>
            </FormControl>
            <Box py={2}>
              <Link inverse={mediaUp(media.md)}>
                {trans('login.forgot_password')}
              </Link>
            </Box>
            <FormControl>
              <Button icon={google} grayText>
                { trans('login.login_with_google') }
              </Button>
            </FormControl>
            <Box
              py={3}
              display='flex'
              justifyContent={mediaUp(media.md) ? 'space-between' : 'space-evenly'}>
              <span className={
                mediaUp(media.md) ?
                  globalClasses.textInverseNormal
                  : globalClasses.textGray
                }
              >
                { trans('login.dont_have_an_account') }
              </span>
              <Link inverse={mediaUp(media.md)}>
                { trans(mediaUp(media.md) ? 'login.create_one' : 'login.sign_up') }
              </Link>
            </Box>
            { mediaUp(media.md) && (
              <small className={cx(globalClasses.textInverseHighlight)}>
                <FormattedMessage
                  id='login.by_clicking_get_started'
                  values={{
                    newline: <br/>,
                    terms: (
                      <Link inverse>
                        {trans('login.terms_of_service')}
                      </Link>
                    ),
                    privacy: (
                      <Link inverse>
                        {trans('login.privacy_policies')}
                      </Link>
                    )
                  }}
                />
              </small>
            )}
          </Box>
        </Grid>
        <Grid className={classes.rightPanel} item xs={12} md={6}>
          <img alt="" src={logo} />
          <p className={cx(
              globalClasses.textPrimary,
              classes.imageTitle,
              globalClasses.textTitle,
            )
          }>
            { trans(carousel[bullet].text) }
          </p>
          <img
            className={classes.image}
            alt=""
            src={carousel[bullet].image}
          />
          <Box display='flex' pt={mediaUp(media.md) ? 8 : 4}>
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
          {mediaSmallerThan(media.md) && (
            <>
              <Box my={4} width='100%' maxWidth={250} className={cx(globalClasses.formPanel)}>
                <FormControl>
                  <Button>{trans('login.sign_up')}</Button>
                </FormControl>
                <FormControl>
                  <Button inverse>{trans('login.log_in')}</Button>
                </FormControl>
              </Box>
              <small className={cx(globalClasses.textGray)}>
                <FormattedMessage
                  id='login.by_clicking_get_started'
                  values={{
                    newline: <br/>,
                    terms: (
                      <Link>
                        {trans('login.terms_of_service')}
                      </Link>
                    ),
                    privacy: (
                      <Link>
                        {trans('login.privacy_policies')}
                      </Link>
                    )
                  }}
                />
              </small>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login;
