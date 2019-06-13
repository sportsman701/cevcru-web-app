import React, { useState, useEffect } from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';
import { FormattedMessage } from 'react-intl';
import cx from 'classnames';

import useWidth from 'hooks/useWidth';
import colors from 'helpers/colors';

import logo from 'resources/logo/logo.svg';
import logoHorizontalMobile from 'resources/logo/logo.svg';
import logoVerticalMobile from 'resources/logo/logo.svg';
import image1 from 'resources/registration/1.svg';
import image2 from 'resources/registration/2.svg';
import image3 from 'resources/registration/3.svg';
import image4 from 'resources/registration/4.svg';


const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
  },
  mainPanel: {
    margin: 'auto'
  },
  leftPanel: {
    backgroundColor: colors.primary,
    boxShadow: '#00000024 13px 4px 20px 0px'
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px'
  },
  loginTitle: {
    fontSize: '26px',
    fontWeight: 'bolder',
    marginTop:  '2em',
    color: 'white'
  },
  imageTitle: {
    fontSize: '26px',
    fontWeight: 'bolder',
    color: colors.primary,
    margin: '30px',
    width: '60%',
    textAlign: 'center'
  },
  image: {
    height: '250px'
  },
  carouselIndicator: {
    borderRadius: '100%',
    backgroundColor: colors.carouselIndicator.normal,
    width: '10px',
    height: '10px',
    margin: '0 7px',
    cursor: 'pointer',
    transition: 'background-color ease 0.5s',

    '&.active': {
      backgroundColor: colors.primary
    },
    '&:hover': {
      backgroundColor: colors.carouselIndicator.hover
    }
  }
});

const carousel = [
  { image: image1, text: 'login.review_your_business_performance' },
  { image: image2, text: 'login.create_and_send_professional_invoices' },
  { image: image3, text: 'login.manage_your_inventory_and_low_stock_list' },
  { image: image4, text: 'login.organize_your_customer_information' },
];

function Login(props) {
  const width = useWidth();
  const classes = useStyles(props);
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
            <FormattedMessage id={'login.log_into_your_business_manager'} />
          </p>
        </Grid>
        <Grid className={classes.rightPanel} item sm={6}>
          <img alt="" src={logo}/>
          <p className={classes.imageTitle}>
            <FormattedMessage id={carousel[bullet].text} />
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