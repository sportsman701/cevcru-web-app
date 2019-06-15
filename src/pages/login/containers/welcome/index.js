import React, { useState, useEffect } from 'react'

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl'

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
import logoHorizontallMobile from 'resources/logo/logo-horizontal-mobile.svg';
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

function Welcome(props) {
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
    <Grid className={classes.root} item xs={12} md={6}>
      <img alt="" src={mediaUp(media.md) ? logo : logoHorizontallMobile} />
      <p className={cx(
        globalClasses.textPrimary,
        classes.imageTitle,
        globalClasses.textTitle
      )}>
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
          <Box
            my={4}
            width='100%'
            maxWidth={250}
            className={cx(globalClasses.formPanel)}
          >
            <FormControl>
              <Button onClick={props.openSignUp}>
                {trans('login.sign_up')}
              </Button>
            </FormControl>
            <FormControl>
              <Button onClick={props.openLogin} inverse>
                {trans('login.log_in')}
              </Button>
            </FormControl>
          </Box>
          <small className={cx(globalClasses.textGray)}>
            <FormattedMessage
              id='login.by_clicking_get_started'
              values={{
                newline: <br/>,
                terms: (
                  <Link target='/service-terms'>
                    {trans('login.terms_of_service')}
                  </Link>
                ),
                privacy: (
                  <Link target='/privacy-policies'>
                    {trans('login.privacy_policies')}
                  </Link>
                )
              }}
            />
          </small>
        </>
      )}
    </Grid>
  )
}

export default Welcome;
